import React, { useState } from 'react'
import { formatCurrency } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../redux/slices/orderSlice'
import { changeState } from '../../redux/slices/methodReceiveSlice'
import {toast} from 'react-toastify';
const Pizza = (props) => {
    const { item, index } = props
    const  [chosenPizza,setChosenPizza] = useState(item.pizzas[0])
    const [base, setBase] = useState('Đế Kéo Tay Truyền Thống')
    const order = useSelector(state => state.order)
    const dispatch = useDispatch()
    const handleAddPizza = () =>{
        if(localStorage.getItem('store') === null){
            dispatch(changeState({hidden: false}))
        }else{
            const existingPizzaIndex = order.pizzaInOrders.findIndex(pizzaInOrder =>  pizzaInOrder.pizza.pizzaId === chosenPizza.pizzaId && pizzaInOrder.base === base)
            const updatedPizzaInOrder = [...order.pizzaInOrders];
            if(existingPizzaIndex !== -1){
                updatedPizzaInOrder[existingPizzaIndex] = {
                    ...updatedPizzaInOrder[existingPizzaIndex],
                    quantity: updatedPizzaInOrder[existingPizzaIndex].quantity + 1
                };
            } else {
                const pizzaInOrders = {
                    quantity: 1,
                    priceAtBill: chosenPizza.price,
                    base: base,
                    pizza: {
                        ...chosenPizza,
                        pizzaType: item,
                    }
                }
                updatedPizzaInOrder.push(pizzaInOrders);
            }
            dispatch(updateOrder({ ...order, total: order.total+chosenPizza.price, pizzaInOrders: updatedPizzaInOrder }));
            toast.success('Thêm vào giỏ hàng thành công')
        }  
    }
  return (
            <div key={index} className='m-[6px] h-auto border rounded-md shadow-md relative'>                
                <div className='group'
                onClick={handleAddPizza}>
                    <div className=' overflow-hidden '>
                    <img className='object-cover h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md' src={item.image} alt='combo'/>
                    </div>
                    <div className='flex justify-between items-center px-[10px] h-[50px] pb-2 cursor-pointer group-hover:bg-slate-50'>
                        <p className='uppercase font-bold text-sm'>{item.name}</p>
                        <p className='uppercase font-bold text-xs bg-red-500 px-[3px] py-[2px] text-white'>Hot</p>
                    </div>
                </div>
                <div className='h-[40px] px-[10px] border-b'>
                    <p className='truncate-2-lines text-sm capitalize text-slate-500'>{item.des}</p>
                </div>
                <div className='h-[55px] pb-1 p-[10px] relative'>
                    <div className='absolute text-[13px] text-[rgba(0,0,0,0.54)] translate-x-3] left-6 z-10 top-0 bg-white px-1'> <span> Chọn cỡ</span></div>
                    <select className='w-full h-full border border-slate-300 rounded-[4px] hover:border-black delay-100 text-[17px] pl-3 pb-2 pt-[6px] focus:outline-[#0A8020] focus:border-[#0A8020]'
                    onChange={(e) => setChosenPizza(item.pizzas.find(pizza => pizza.size === e.target.value))}
                    >
                    {item.pizzas.map((pizza, index)=>
                        <option key={index} value={pizza.size} > {pizza.size}</option>
                    )}
                    </select>
                </div>
                <div className='h-[55px] pb-1 p-[10px] relative'>
                    <div className='absolute text-[13px] text-[rgba(0,0,0,0.54)] translate-x-3] left-6 z-10 top-0 bg-white px-1'> <span> Chọn đế viền</span></div>
                    <select className='w-full h-full border border-slate-300 rounded-[4px] hover:border-black delay-100 text-[17px] pl-3 pb-2 pt-[6px] focus:outline-[#0A8020] focus:border-[#0A8020]'
                    onChange={(e)=>setBase(e.target.value)}>
                        <option value="Đế Kéo Tay Truyền Thống">Đế Kéo Tay Truyền Thống</option>
                        <option value="Đế Giòn Xốp">Đế Giòn Xốp</option>
                        <option value="Đế Mỏng Giòn">Đế Mỏng Giòn</option>
                    </select>
                </div>
                <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
                    <button className='bg-[#0A8020] w-full h-full rounded text-white uppercase flex justify-between py-[6px] px-4 text-sm hover:shadow-md'
                    onClick={()=>handleAddPizza()}>
                    <div>
                        Chọn
                    </div>
                    <div>
                        {formatCurrency(chosenPizza?.price)}
                    </div>
                    </button> 
                </div>
            </div>
  )
}

export default Pizza