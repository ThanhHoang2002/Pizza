/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MethodReceive from "../../components/MethodReceive";
import { changeState } from "../../redux/slices/methodReceiveSlice";
import { formatCurrency } from "../../utils";
import { update } from "../../redux/slices/alertSlice";
import Alert from "../../components/Alert";
import API_ROUTES  from "../../ApiUrl/index";
import axios from "axios";
import { reset } from "../../redux/slices/orderSlice";
const Payment = () => {
  const [methodReceive, setMethodReceive] = useState(
    localStorage.getItem("receiveMethod") === "Delivery" ? true : false);
    const isHiddenAlert = useSelector((state) => state.alert.hidden)
    const paymentMethod = [
      {
        image:'https://cdn.pizzahut.vn/images/Web_V3/Payment/cash.png',
        name:'Thanh toán bằng tiền mặt'
      },
      {
        image:'https://cdn.pizzahut.vn/images/Web_V3/Payment/ZaloPay_vuong.png',
        name:'Thanh toán bằng ZaloPay'
      },
      {
        image:'https://cdn.pizzahut.vn/images/Web_V3/Payment/momo.png',
        name:'Thanh toán bằng MoMo'
      },
      {
        image:'https://cdn.pizzahut.vn/images/Web_V3/Payment/visa.png',
        name:'Thanh toán bằng ATM/VISA'
      },
      {
        image:'https://cdn.pizzahut.vn/images/Web_V3/Payment/vnpay.png',
        name:'Thanh toán bằng Vnpay'
      }
    ]
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address"))
  );
  const [store, setStore] = useState(
    localStorage.getItem("store") === null
      ? null
      : JSON.parse(localStorage.getItem("store"))
  );
  const isHiddenMethodReceive = useSelector(
    (state) => state.methodReceive.hidden
  );
  const client =JSON.parse(localStorage.getItem('client'))
  const [note, setNote] = useState("");
  const [name,setName] = useState(client?.name||'')
  const [phone, setPhone] = useState(client?.phone||'')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState()
  const order = useSelector((state) => state.order);
  const handleBackToOrder = () => {
    navigate("/order");
  };
  useEffect(() => { 
    if (order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length === 0) {
      navigate("/order");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isValidVietnamesePhoneNumber=(phone) => {
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;
    return regex.test(phone);
  }
  const handShowMethodReceive =()=>{
    dispatch(changeState({hidden: false}))
  }
  const handleSubmit = async()=>{
    if(name===""||phone===""){
      dispatch(update({hidden: false ,text: 'Vui lòng điền đầy đủ thông tin'}))
      return
    }
    if(isValidVietnamesePhoneNumber(phone)===false){
      dispatch(update({hidden: false ,text: 'Số điện thoại không hợp lệ'}))
      return
    }
    if(chosenPaymentMethod===undefined){
      dispatch(update({hidden: false ,text: 'Vui lòng chọn phương thức thanh toán'}))
      return
    }
    const orderDetail = {
      name: name,
      phone: phone,
      note: note,
      receiveMethod: methodReceive?'Delivery':'Pickup',
      address: address?.description,
      store: store,
      paymentMethod: "cash",
      state: 'Chờ xác nhận',
      client: client,
      comboInOrders: order.comboInOrders,
      pizzaInOrders: order.pizzaInOrders,
      foodInOrders: order.foodInOrders,
      dayOrder: new Date(),
      staff: null,
    };
    try{
      const response = await axios.post(API_ROUTES.addOrder, orderDetail)
      dispatch(reset()) 
      navigate(`/thank-you/${response.data.result.order_id}`)
    }catch(error){
      dispatch(update({hidden: false ,text: 'Đặt hàng thất bại'}))
    }
  }
  const handleChangePaymentMethod=(index)=>{
    if(index>0){
      dispatch(update({hidden: false ,text: 'Phương thức thanh toán này hiện không khả dụng'}))
      return
    }
    setChosenPaymentMethod(index)
  }
  return (
    <div>
      <div
        className={`${
          isHiddenMethodReceive
          && isHiddenAlert
            ? ""
            : "pointer-events-none brightness-50"
        } bg-white `}
      >
        <div className="h-[64px] bg-white">
          <Header
            width="full"
            backButton="true"
            showAddress="true"
            hiddenProfile="true"
          />
        </div>
        <div className='w-full h-[85.6px] py-7 text-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
          <span className="uppercase font-bold text-2xl">Thanh toán</span>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[600px] mt-3 h-auto" >
            <div className="shadow-3xl w-full px-[25px] h-auto rounded-[8px] ">
              <div
                className="flex border-b h-[75px] items-center justify-between cursor-pointer"
                onClick={handleBackToOrder}
              >
                <div className="flex relative">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/1A1A1A/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                  />
                  <span className="text-[16px] ml-3">
                    {" "}
                    Xem chi tiết giỏ hàng của bạn
                  </span>
                  <div className="absolute w-5 h-5 bg-[#c7102e] rounded-full text-white top-[-10px] left-4 flex justify-center items-center">
                    <span className="text-[12px]">{
                        order.pizzaInOrders.reduce((total, pizzaInOrder) => total + pizzaInOrder.quantity, 0) +
                        order.foodInOrders.reduce((total, foodInOrder) => total + foodInOrder.quantity, 0) +
                        order.comboInOrders.reduce((total, comboInOrder) => total + comboInOrder.quantity, 0)
                    }</span>
                  </div>
                </div>
                <div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/metro/26/0a8020/forward.png"
                    alt="forward"
                  />
                </div>
              </div>
              <div className="flex h-[75px] w-full items-center justify-between ">
                <div className="flex relative items-center w-[87.5%]">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/1A1A1A/marker.png"
                    alt="marker"
                  />
                  <span className="text-[16px] ml-3 ">
                    {methodReceive ? (
                      <span>
                        Giao hàng tận nơi:{" "}
                        <span className="font-bold">{address?.description}</span>
                      </span>
                    ) : (
                      <span>
                        Mua mang về:{" "}
                        <span className="font-bold">{store.address}</span>
                      </span>
                    )}
                  </span>
                </div>
                <div className="text-[#0A8020] rounded bg-white cursor-pointer" onClick={handShowMethodReceive}>
                  Thay đổi
                </div>
              </div>
              <div className="flex h-[52px] items-center justify-between pb-3">
                <div className="flex relative w-full h-full">
                  <img
                    className="w-6 h-6"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/fluency-systems-regular/24/1A1A1A/notepad.png"
                    alt="notepad"
                  />
                  <input className="text-[16px] ml-3 w-full h- border border-slate-300 rounded-[4px] py-[10.5px] px-[14px] focus:outline-none focus:border-[#0A8020]"
                    type="text"
                    placeholder="Ghi chú"
                    onChange={(e)=>setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="shadow-3xl w-full px-[25px] py-[30px] h-auto rounded-[8px] mt-3">
                <div className="text-center font-bold text-lg"><span>Thông tin đặt hàng</span></div>
                <div className="flex flex-col my-4">
                  <label className="font-bold">Họ và tên*</label>
                  <input  className={`mt-2 focus:outline-none rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-red-300  ${name===""?'border border-[#ff0000] focus:border-2 focus:border-red-600':'border hover:border-black focus:border-2 focus:border-[#0A8020]'}`} 
                  value={name}
                  type="text"
                  placeholder="Yêu cầu họ và tên"
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="font-bold">Số điện thoại*</label>
                  <input className={`mt-2 focus:outline-none  rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-red-300 ${phone===""?'border border-[#ff0000] focus:border-2 focus:border-red-600':'border hover:border-black focus:border-2 focus:border-[#0A8020]'}`} 
                  type="text"
                  value={phone}
                  placeholder="Yêu cầu số điện thoại"
                  onChange={(e)=>setPhone(e.target.value)}/>
                </div>
            </div>
            <div className="shadow-3xl w-full px-[25px] py-[30px] rounded-[8px] my-3">
              <div className="text-center font-bold text-lg"><span>Phương thức thanh toán</span></div>
              {
                paymentMethod.map((method,index)=>(
                  <div className="flex cursor-pointer mt-4 justify-center items-center" onClick={()=>handleChangePaymentMethod(index)}>
                    <div className="h-[42px] w-[42px] rounded-full hover:bg-slate-100 flex justify-center items-center">
                      <div className={`rounded-full w-5 h-5 border-[2.38px] p-[3px] ${chosenPaymentMethod=== index?'border-[#0A8020]':'border-gray-500'} cursor-pointer`}>
                        <div className={`w-full h-full ${chosenPaymentMethod=== index ?'bg-[#0A8020]':''} rounded-full`} >
                        </div>
                      </div>
                    </div>
                    <div className="h-[62px] w-full border border-[#0A8020] rounded-[8px] flex items-center p-[12px]">
                        <img className="h-[40px] w-[40px]" src={method.image} alt={method.name}/>
                        <span className="ml-[15px] ">{method.name}</span>
                    </div>
               </div>
                ))
              }
              <button className="w-full h-[36.5px] p-[6px] bg-[#0A8020] text-white rounded-[4px] mt-4" onClick={handleSubmit}>
                <span className="uppercase font-bold text-[0.875rem]">đặt hàng</span>
                <span className="text-[0.875rem] font-bold ml-[5px]"> {formatCurrency(order.total + 22000)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute top-[10%] left-[35%] z-50 `}>
          {isHiddenMethodReceive ? (
            ""
          ) : (
            <MethodReceive
              showClose="true"
              methodReceive={methodReceive}
              setMethodReceive={setMethodReceive}
            />
          )}
        </div>
        <div className={`fixed top-[40%] left-[35%] z-50 `}>
        {
          isHiddenAlert===false ? <Alert/> : ''
        }
      </div>
    </div>
  );
};

export default Payment;
