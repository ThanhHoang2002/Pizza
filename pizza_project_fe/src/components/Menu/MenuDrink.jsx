import React from 'react'
import Product from '../Product/Food'
const MenuDrink = () => {
    const drinks = [
       {
        id: '1',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '2',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '3',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '4',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '5',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '6',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '7',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '8',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
       {
        id: '9',
        name: 'Pepsi Lon 320ml',
        des: 'Pepsi Lon 320ml',
        price: 20000,
        image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pepsi_Can_400x275.jpg'
       },
    ]
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-4'>
        {
          drinks.map((item, index)=>{
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

export default MenuDrink