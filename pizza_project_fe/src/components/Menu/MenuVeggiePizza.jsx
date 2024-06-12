import React, { useEffect, useState } from 'react'
import Pizza from '../Product/Pizza'
import API_ROUTES from '../../ApiUrl'
const MenuVeggiePizza = () => {
  const [pizza_type, setPizzaType] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTES.getVegetarianPizza);
        const data = await response.json();
        setPizzaType(data.result); 
        console.log(data.result)
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu từ API:', error);
      }
    };
    fetchData(); // Gọi hàm fetchData khi component được render
  }, []) 
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-4'>
        {
          pizza_type.map((item, index)=>{
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

export default MenuVeggiePizza