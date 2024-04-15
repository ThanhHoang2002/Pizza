import React from 'react'
import Product from '../Product/Food'
const MenuFood = () => {
    const foods = [
        {   foodID: '1',
            name: 'Bánh bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '2',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '3',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '4',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '5',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '6',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '7',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '8',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '9',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '10',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        },
        {
            foodID: '11',
            name: 'Bánh mỳ bơ tỏi',
            price: 20000,
            image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Banh_Mi_Bo_Toi_400x275.jpg',
            des:'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng'
        }
    ]
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-4'>
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