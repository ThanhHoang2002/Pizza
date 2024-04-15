import React from 'react'
import {formatCurrency} from '../../utils'
import { useDispatch } from 'react-redux'
import { deleteCart,updateQuantity } from '../../redux/slices/cartSlice';
const FoodCart = (props) => {
  const dispatch = useDispatch();
  const {food,index} = props
  const handleDeleteItem = () => {
    dispatch(deleteCart({hiddenDelete: false, type: 'food', index: index, itemName: food.food.name}))
  }
  const handleChangeQuantity = () => {
    dispatch(updateQuantity({hiddenChange: false, type: 'food', index: index, itemName: food.food.name, quantity: food.quantity}))
  }
  return (
    <div key={index} className='relative py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'>
        <div className='flex justify-between font-bold pb-1'>
          <div>{food.food.name} </div>
          <div>{formatCurrency(food.priceAtBill * food.quantity)}</div>
        </div>
        <button className='absolute h-6 w-6 text-center top-[20%] font-bold border left-2'
        onClick={handleChangeQuantity}>
          x{food.quantity}
        </button>
        <div className='absolute top-1 right-2 hover:bg-slate-200 rounded-full delay-100' 
        onClick={handleDeleteItem}>
            <img width="24" height="24" src="https://img.icons8.com/ios/50/737373/multiply.png" alt="multiply"/>
        </div>
    </div>
  )
}

export default FoodCart