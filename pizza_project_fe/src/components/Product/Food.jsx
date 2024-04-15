import React from 'react'
import { formatCurrency } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../redux/slices/orderSlice'
import { changeState } from '../../redux/slices/methodReceiveSlice'
import {toast} from 'react-toastify';
const Product = (props) => {
    const {item, index} = props
    const order = useSelector(state => state.order)
    const dispatch = useDispatch()
    const handleAddProduct = () =>{
        if(localStorage.getItem('store') === null){
            dispatch(changeState({hidden: false}))
        }else{
            const existingFoodIndex= order.foodInOrders.findIndex(foodInOrder =>  foodInOrder.food.id === item.id)
            const updatedFoodInOrder = [...order.foodInOrders];
            if(existingFoodIndex !== -1){
                updatedFoodInOrder[existingFoodIndex] = {
                    ...updatedFoodInOrder[existingFoodIndex],
                    quantity: updatedFoodInOrder[existingFoodIndex].quantity + 1
                };
            } else {
                const foodInOrders = {
                    quantity: 1,
                    priceAtBill: item.price,
                    food: item
                }
                updatedFoodInOrder.push(foodInOrders);
            }
            dispatch(updateOrder({ ...order,total: order.total+item.price , foodInOrders: updatedFoodInOrder }));
            toast.success('Thêm vào giỏ hàng thành công')
        }
    }
  return (
    <div key={index} className='m-[6px] h-auto border rounded-md shadow-md relative'>                
                <div className='group'
                    onClick={handleAddProduct}>
                    <div className=' overflow-hidden '>
                    <img className='object-cover h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md' src={item.image} alt='starter'/>
                    </div>
                    <div className='flex justify-between items-center px-[10px] h-[50px] pb-2 cursor-pointer group-hover:bg-slate-50'>
                        <p className='uppercase font-bold text-sm'>{item.name}</p>
                    </div>
                </div>
                <div className='h-[40px] px-[10px] border-b'>
                    <p className='truncate-2-lines text-sm '>{item.des}</p>
                </div>       
                <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
                    <button className='bg-[#0A8020] w-full h-full rounded text-white uppercase flex justify-between py-[6px] px-4 text-sm hover:shadow-md'
                    onClick={()=>handleAddProduct()}>
                    <div>
                        Chọn
                    </div>
                    <div>
                        {formatCurrency(item.price)}
                    </div>
                    </button> 
                </div>
            </div>
  )
}

export default Product