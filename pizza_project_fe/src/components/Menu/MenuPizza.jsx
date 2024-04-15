import React, { useEffect, useState } from 'react'
import Pizza from '../Product/Pizza'
import  API_ROUTES from '../../ApiUrl/index'
const MenuPizza = () => {
  const [pizzaType,setPizzaType] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTES.getPizzaType);
        const data = await response.json();
        setPizzaType(data.result); 
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu từ API:', error);
      }
    };
    fetchData(); 
  }, [])
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-4'>
        {
          pizzaType.map((item, index)=>{
            return (
            <div key={index}>
              <Pizza item={item} index={index} />
            </div>
          )
        })
        }
    </div>
  )
}

export default MenuPizza