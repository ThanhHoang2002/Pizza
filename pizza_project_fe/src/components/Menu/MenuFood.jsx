import React, { useEffect, useState } from 'react'
import Product from '../Product/Food'
import  API_ROUTES  from '../../ApiUrl'
const MenuFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(API_ROUTES.getStarter);
            const data = await response.json();
            setFoods(data.result); 
            console.log(data.result)
          } catch (error) {
            console.error('Lỗi khi fetch dữ liệu từ API:', error);
          }
        };
        fetchData(); // Gọi hàm fetchData khi component được render
      }, [])
  return (
    <div className='h-auto  w-full grid grid-cols-4'>
        {
          foods.map((item, index)=>{
            return (
                <div key={index}>
                    <Product item={item} index={index} />
                </div>
                
          )
        })
        }
    </div>
  )
}

export default MenuFood