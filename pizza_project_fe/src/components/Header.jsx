import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CgBell } from "react-icons/cg";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../redux/slices/loginSlice';
import { changeState } from '../redux/slices/methodReceiveSlice';

const Index = (props) => {
    const navigate = useNavigate()
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const notificationRef = useRef(null);
    const showAddress = props.showAddress;
    const showFollowOrder = props.showFollowOrder;
    const dispatch = useDispatch();
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (isNotificationVisible && !notificationRef.current?.contains(event.target)) {
          setNotificationVisible(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isNotificationVisible]);

    const handleClickCGBell = () => {
      setNotificationVisible(!isNotificationVisible);
    }
    const handleClickMember =()=>{
      dispatch(update())
    }
    const handShowMethodReceive =()=>{
      dispatch(changeState({hidden: false}))
    }
  return (
    <div className={`fixed flex top-0 w-${props.width} bg-white h-[64px] px-[18px] shadow-sm justify-between z-20`}>
      <div className='flex justify-center items-center'>
        <button className={`flex  px-2 py-[6px] h-10 translate-x-[8px] translate-y-[6px] hover:bg-[rgba(10,128,32,0.04)] rounded-md ${props.backButton?'':'hidden'}`}
                onClick={()=>navigate(-1)}>
          <img width="24" height="24" src="https://img.icons8.com/forma-regular/24/0a8020/back.png" alt="back"/>
          <p className='uppercase text-[#0A8020]'>Quay Lại</p>
        </button>
        <div className=' h-full  cursor-pointer flex items-center' onClick={()=>navigate("/")}>
            <img className='h-[38px] pl-3' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e' alt=':Logo' />
        </div>
      </div>
      <div className=' h-full w-auto flex items-center'>
        <button className={`${showAddress?"pr-3":"hidden"}`}
        onClick={handShowMethodReceive}>
          {
            localStorage.getItem('store') === null ? 
            <div>
              <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/cb1c3b/marker.png" alt="marker"/>
            </div> 
            : localStorage.getItem('receiveMethod') === "Delivery" ? 
              <div className='flex justify-center items-center'>
                <img width="24" height="24" src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/delivery.gif" alt="marker"/>
                <p className='text-sm w-[200px] truncate-1-lines text-slate-500'>{JSON.parse(localStorage.getItem("address")).description}</p>
              </div>
              :
              <div>
                <div className='flex justify-center items-center'>
                <img width="24" height="24" src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/pickup.gif" alt="marker"/>
                <p className='text-sm w-[200px] truncate-1-lines text-slate-500'>{JSON.parse(localStorage.getItem("store")).address}</p>
              </div>
              </div>
          }
        </button>
        <div ref={notificationRef} className='relative z-40'>
          <CgBell className='h-[27px] w-[27px] cursor-pointer' onClick={handleClickCGBell}/>
            <div  className={`notification ${isNotificationVisible ? 'block' : 'hidden'} absolute top-[45px] left-[-150px] h-[100px] w-[300px] bg-white rounded-b-md shadow-xl flex justify-center items-center z-30`}>
               <p>Bạn chưa có thông báo nào!</p>
            </div>
        </div>
        <button className='flex  items-center p-[20px]  hover:bg-slate-100' onClick={handleClickMember}>
          <img className='h-[24px] w-[24px] rounded-full' src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/cb1c3b/external-user-networking-tanah-basah-glyph-tanah-basah.png' alt=':Avatar' />
          <p className='font-bold  pl-[8px]'>Thành viên</p>
        </button>
        <div className={`${showFollowOrder?"h-full flex items-center border-l-2 p-[8px] cursor-pointer hover:bg-slate-100":"hidden"}`}>
          <img className='h-[24px] w-[24px]' src='https://cdn.pizzahut.vn/images/Web_V3/OrderTracker/track_your_order.svg' alt='Theo dõi đơn hàng' />
          <p className='font-bold pl-1 '>Theo Dõi Đơn Hàng</p>
        </div>
      </div>
    </div>
  )
}

export default Index