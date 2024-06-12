/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { formatCurrency } from '../../utils'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const ThankYou = (props) => {
    const [order, setOrder] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const order_id = params.order_id
    const hanldeClick = () => {
        navigate('/')
    }
    const state = [
        {
            id: 1,
            name: "Chờ xác nhận"
        },
        {
            id: 2,
            name: "Đang chuẩn bị"
        },
        {
            id: 3,
            name: order.receiveMethod==='Pickup'?'Chờ nhận hàng':'Đang giao hàng'
        },
        {
            id: 4,
            name: "Hoàn thành"
        }
    ]
    const currentState = state.find((item) => item.name.toLocaleLowerCase() === order?.state?.toLocaleLowerCase())?.id;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/v1/order/get/${order_id}`);
            setOrder(response.data.result);
          } catch (error) {
            console.log(error);
          } 
        };
    
        fetchData();
      }, []);
  return (
    <div>
        <div className="h-[64px] bg-white">
          <Header
            width="full"
            hiddenProfile="true"
          />
        </div>
        <div className='w-full h-auto flex justify-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
            <div className='w-[600px]' >
                <div className='w-full h-[70px] py-[10px] px-[20px] bg-white rounded-t-[4px]'>
                    <p className='py-[10px] px-[20px] text-center font-bold text-xl text-[rgba(0,0,0,0.54)]'>Cảm ơn vì đã lựa chọn chúng tôi {order?.name}!</p>
                </div>
                <div className='p-[10px] w-full h-[84px] bg-[url("https://cdn.pizzahut.vn/images/Web_V3/Homepage/Thanksyoupage.jpg")] text-center'>
                    <h5 className='text-[#C8102E] text-[1.5rem] leading-[1.334]'> Chúc bạn ngon miệng</h5>
                    <h6 className='text-[rgba(0,0,0,0.54)] text-[1.25rem] leading-[1.6] font-medium'>Hẹn sớm gặp lại bạn</h6>
                </div>
                <div className='w-full px-[10px] bg-white'>
                    <div className='pt-[15px] text-[#231F20]'>
                        <p>Thông tin đơn hàng</p>
                    </div>
                    <div className='py-[8px] px-[10px] border-t-[2px] text-[rgba(0,0,0,0.54)]'>                  
                        <p className='px-[5px]'>Mã đơn hàng #{order?.order_id}</p>
                        <p className='px-[5px]'>Đơn hàng</p>
                        <div>
                        {
                            order?.foodInOrders?.map((food, index)=>(
                                <div key={index} className='grid grid-cols-8 py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'>
                                    <div className='h-6 w-6 text-center font-bold border '
                                    >
                                    x{food.quantity}
                                    </div> 
                                    <div className=' font-bold pl-[30px] col-span-6'>{food.food.name} </div>
                                    <div className='justify-self-end font-bold'>{formatCurrency(food.priceAtBill * food.quantity)}</div>
                                </div>
                            ))
                        }
                        {
                            order?.comboInOrders?.map((combo, index)=>(
                                <div key={index} className='grid grid-cols-8 py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'>
                                    <div className='h-6 w-6 text-center  font-bold border '
                                    >
                                    x{combo.quantity}
                                    </div> 
                                    <div className='font-bold pl-[30px] col-span-6'>{combo.combo.name} </div>
                                    <div className='justify-self-end font-bold'>{formatCurrency(combo.priceAtBill * combo.quantity)}</div>
                                </div>                           
                            ))
                        }
                        {
                            order?.pizzaInOrders?.map((pizza, index)=>(                           
                                <div key={index} className='grid grid-cols-8 py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm '>
                                    <div className=' h-6 w-6 text-center font-bold border '
                                    >
                                    x{pizza.quantity}
                                    </div>   
                                    <div className='col-span-6 flex-col justify-between pb-1'>
                                        <div className='font-bold pl-[30px]'>{pizza.pizza.name} </div>
                                        <div>{pizza.pizza.size}</div>
                                        <div>{pizza.base}</div>
                                    </div>
                                    <div className='justify-self-end font-bold'>{formatCurrency(pizza.priceAtBill * pizza.quantity)}</div>
                                </div>
                            ))
                        }                     
                        </div>
                        <div className='px-[5px] bg-[#F5F7F9]'>
                            <div className='pb-[10px] flex justify-between'>
                                <p>Tổng</p>
                                <p>{formatCurrency(order?.total)}</p>
                            </div>
                            <div className='pb-[10px] flex justify-between'>
                                <p>Phí vận chuyển</p>
                                <p>{formatCurrency(22000)}</p>
                            </div>
                            <div className='pb-[10px] flex justify-between'>
                                <p>Thanh toán</p>
                                <p>{formatCurrency(order?.total + 22000)}</p>
                            </div>
                        </div>                   
                    </div>
                    <div className='h-[75px] w-full py-[10px] px-[15px]'>
                        <p>Phương thức thanh toán</p>
                        <div className='h-[40px] pt-[10px] border-t-[2px] flex'>
                            <img className='h-[30px] w-[30px]' src="https://cdn.pizzahut.vn/images/Web_V3/Payment/cash.png" alt="tien_mat"/>
                            <p className='pl-2 text-[rgba(0,0,0,0.54)]'>Thanh toán bằng tiền mặt</p>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-4 py-[10px]'>
                        <p className='col-span-4 border-b-2 my-5'> Tình trạng đơn hàng</p>
                        {
                            state.map((item, index) => (
                                <div key={index} className={`h-3 ${item.id<= currentState?"bg-[#0A8020] ":"bg-[#DFDFE3]"} ${item.id=== 1?"rounded-l-lg":""} ${item.id=== 4?"rounded-r-lg":""}`}>

                                </div>
                            ))
                        }
                        <div>Chờ xác nhận</div>
                        <div className='justify-self-center'>Đang chuẩn bị</div>
                        <div className='justify-self-center'>{order.receiveMethod==='Pickup'?'Chờ nhận hàng':'Đang vận chuyển'}</div>
                        <div className='justify-self-end'>Hoàn thành</div>
                    </div>
                    <div className='h-[104px] py-[10px] px-[5px] mt-5'>
                        <div className='p-[10px] my-[6px] text-center bg-[#DFDFE3] rounded-[4px]'>
                            <div className='font-bold text-[rgba(0,0,0,0.87)] text-[18px]'>Câu hỏi cho chúng tôi?</div>
                            <div className='text-[rgb(10,128,32)] text-[18px] '>Mọi thông tin liên hệ: 1234 5678</div>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <button className='w-full h-[40px] bg-[#0A8020] text-white rounded-[4px] font-bold text-[0.9375rem]'
                        onClick={hanldeClick}
                        >Tiếp tục mua hàng</button>
                    </div>
                </div>
                <div className='h-6 rounded-b-[4px] bg-white'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ThankYou