import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CgBell } from "react-icons/cg";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../redux/slices/loginSlice';

const Index = () => {
    const navigate = useNavigate()
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const notificationRef = useRef(null);
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
  return (
    <div className='fixed flex top-0 w-full bg-white h-[64px] px-[18px] shadow-xl justify-between z-10'>
      <div className=' h-full  cursor-pointer flex items-center' onClick={()=>navigate("/")}>
          <img className='h-[38px] pl-3' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e' alt=':Logo' />
      </div>
      <div className=' h-full w-auto flex items-center '>
        <div ref={notificationRef} className='relative'>
          <CgBell className='h-[27px] w-[27px] cursor-pointer' onClick={handleClickCGBell}/>
            <div  className={`notification ${isNotificationVisible ? 'block' : 'hidden'} absolute top-[45px] left-[-150px] h-[100px] w-[300px] bg-white rounded-b-md shadow-xl flex justify-center items-center`}>
               <p>Bạn chưa có thông báo nào!</p>
            </div>
        </div>
        <button className='flex  items-center p-[20px]  hover:bg-slate-100' onClick={handleClickMember}>
          <img className='h-[24px] w-[24px] rounded-full' src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/cb1c3b/external-user-networking-tanah-basah-glyph-tanah-basah.png' alt=':Avatar' />
          <p className='font-bold  pl-[8px]'>Thành viên</p>
        </button>
        <div className='h-full flex items-center border-l-2 p-[8px] cursor-pointer hover:bg-slate-100'>
          <img className='h-[24px] w-[24px]' src='https://cdn.pizzahut.vn/images/Web_V3/OrderTracker/track_your_order.svg' alt='Theo dõi đơn hàng' />
          <p className='font-bold pl-1 '>Theo Dõi Đơn Hàng</p>
        </div>
      </div>
    </div>
  )
}

export default Index