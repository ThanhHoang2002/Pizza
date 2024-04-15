import React, { useEffect, useState } from 'react'
import Combo from '../Product/Combo'
import  API_ROUTES from '../../ApiUrl/index'
const MyBox = () => {
  const [combo,setCombo] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTES.getMyBox);
        const data = await response.json();
        setCombo(data.result); 
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu từ API:', error);
      }
    };
    fetchData(); // Gọi hàm fetchData khi component được render
  }, [])
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-2'>
        {
          combo.map((item, index)=>
            <Combo key={index} item={item} index={index}/>
          )
        }
    </div>
  )
}

export default MyBox