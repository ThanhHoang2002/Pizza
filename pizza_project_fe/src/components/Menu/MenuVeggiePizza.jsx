import React from 'react'
import Pizza from '../Product/Pizza'
const MenuVeggiePizza = () => {
  const pizza__type = [
    {
      id: '1',
      name: 'Margherita',
      des: 'Thịt bò, thịt xông khói, pepperoni, thơm, ớt chuông, nấm, hành tây trên nền xốt cà chua, phô mai mozzarella',
      category: 'Classic',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
          id: '1',
          size: "S",
          price: 100000,
        },
        {
          id: '2',
          size: "M",
          price: 200000,
        },
        {
          id: '3',
          size: "L",
          price: 300000,
        }
      ]
    },
    {
      id: '2',
      name: 'Pepperoni',
      des: 'Thịt bò, thịt xông khói, pepperoni, thơm, ớt chuông, nấm, hành tây trên nền xốt cà chua, phô mai mozzarella',
      category: 'Classic',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '3',
      name: 'Hawaiian',
      des: 'Tomato, mozzarella, ham, pineapple',
      category: 'Classic',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '4',
      name: 'Meat Feast',
      des: 'Tomato, mozzarella, ham, pepperoni, bacon, beef,Tomato, mozzarella, ham, pepperoni, bacon, beef',
      category: 'Classic',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '5',
      name: 'Veggie',
      des: 'Tomato, mozzarella, mushrooms, peppers, sweetcorn, red onions',
      category: 'Classic',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '6',
      name: 'Vegan Margherita',
      des: 'Tomato, vegan mozzarella, basil',
      category: 'Vegan',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '7',
      name: 'Vegan Pepperoni',
      des: 'Tomato, vegan mozzarella, pepperoni',
      category: 'Vegan',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '8',
      name: 'Vegan Hawaiian',
      des: 'Tomato, vegan mozzarella, ham, pineapple',
      category: 'Vegan',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '9',
      name: 'Vegan Meat Feast',
      des: 'Tomato, vegan mozzarella, ham, pepperoni, bacon, beef',
      category: 'Vegan',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
    {
      id: '10',
      name: 'Vegan Veggie',
      des: 'Tomato, vegan mozzarella, mushrooms, peppers, sweetcorn, red onions',
      category: 'Vegan',
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/Pizza_Thap_Cam_400x275.jpg',
      pizzas: [{
        id: '1',
        size: "S",
        price: 100000,
      },
      {
        id: '2',
        size: "M",
        price: 200000,
      },
      {
        id: '3',
        size: "L",
        price: 300000,
      }
    ]
    },
  ]
  return (
    <div className='h-auto min-h-[950px] w-full grid grid-cols-4'>
        {
          pizza__type.map((item, index)=>{
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