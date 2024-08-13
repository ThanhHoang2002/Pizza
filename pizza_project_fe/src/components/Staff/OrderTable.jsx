/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';
import { formatCurrency } from '../../utils';

const OrderTable = (props) => {
  const TABLE_HEAD = ["Mã đơn hàng", "Ngày đặt hàng", "Tổng tiền", "Trạng thái", "Lưu"];
  const title = props.title;  
  const [orders, setOrders] = useState(props.orders);
  useEffect(() => {
    setOrders(props.orders);
  }, [props.orders]);
  const handleStatusChange = (order_id, newState) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.order_id === order_id ? { ...order, state: newState } : order
      )
    );
  };

  const handleSave = async (order_id) => {
    const updatedOrder = orders.find(order => order.order_id === order_id);
    const setStaffOrder = {...updatedOrder, staff: JSON.parse(localStorage.getItem('user'))};
    try{
        const token = localStorage.getItem('token');
        const response = await axios.put(`http://localhost:8080/api/v1/order/update`, setStaffOrder, {
            headers: {
                'Authorization': `Bearer ${token}`
            }})
            toast.success('Lưu thành công')
    }catch(error){
      console.log(error)
      toast.error('Lưu thất bại')
    }
  };
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none mt-12">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-scroll px-0 h-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(
              ({
                order_id,
                dayOrder,
                total,
                receiveMethod,
                state,
              }, index) => {
                const isLast = index === orders.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={order_id}>
                    <td className={classes}>
                        <div className="flex items-center gap-3">          
                            <a 
                            href={`/thank-you/${order_id}`} // Đặt URL hoặc đường dẫn của trang bạn muốn mở
                            target="_blank" // Mở liên kết trong một tab mới
                            rel="noopener noreferrer" // Đảm bảo an toàn khi mở liên kết ngoài
                            >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold underline"
                            >
                                #{order_id}
                            </Typography>
                            </a>
                        </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {dayOrder ? format(new Date(dayOrder), 'dd/MM/yyyy HH:mm') : 'N/A'}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatCurrency(total)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                            <select 
                            value={state.toLowerCase()}
                            onChange={(e) => handleStatusChange(order_id, e.target.value)}
                            className={`
                                ${state.toLowerCase() === "Chờ xác nhận".toLowerCase() ? "text-red-900 bg-[rgb(244,67,54,0.2)] cursor-pointer" :
                                state.toLowerCase() === "Chờ nhận hàng".toLowerCase() || state.toLowerCase() === "Đang giao hàng".toLowerCase() || state.toLowerCase() === "Đang chuẩn bị".toLowerCase() ? "bg-[rgb(255,193,7,0.2)] text-yellow-900 cursor-pointer" :
                                "bg-[rgb(76,175,80,0.2)] text-green-900 pointer-events-none"
                                } rounded-md font-bold uppercase text-xs p-2 appearance-none`}
                            >
                            <option className='text-red-900' value="chờ xác nhận">Chờ xác nhận</option>
                            <option className='text-yellow-900' value="đang chuẩn bị">Đang chuẩn bị</option>
                            <option className='text-yellow-900' value={receiveMethod === "Delivery" ? "đang giao hàng" : "chờ nhận hàng"}>
                                {receiveMethod === "Delivery" ? "Đang giao hàng" : "Chờ nhận hàng"}
                            </option>
                            <option className='text-green-900' value="hoàn thành">Hoàn thành</option>
                        </select>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Lưu thay đổi">
                        <IconButton variant="text" onClick={() => handleSave(order_id)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default OrderTable;

