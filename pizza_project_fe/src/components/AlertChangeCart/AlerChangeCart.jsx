import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/slices/cartSlice'
import { changeQuantity } from '../../redux/slices/orderSlice'
export const AlerChangeCart = () => {
    const quantityStart = useSelector(state => state.cart.quantity)
    const [quantity, setQuantity] = useState(quantityStart)
    const dispatch = useDispatch()
    const itemName = useSelector(state => state.cart.itemName)
    const index = useSelector(state => state.cart.index)
    const type = useSelector(state => state.cart.type)
    useEffect(() => {
        setQuantity(quantityStart);
    }, [quantityStart]);
    const handClose = () => {
        dispatch(updateQuantity({hiddenChange: true}))
    }
    const handleUpdateQuantity = () => {
        dispatch(changeQuantity({type: type, index: index,quantity: quantity}))
        dispatch(updateQuantity({hiddenChange: true}))
    }
    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }
  return (
    <div className='px-5 pt-6 pb-2 bg-white h-auto w-auto rounded-md min-h-[185px] min-w-[405px]'>
        <div className='flex items-center justify-center py-6 px-4 min-h-[90px] '>
            <h1 className='text-3xl font-bold'>
              {itemName}
            </h1>
        </div>
        <div className='w-full h-auto min-h-[80px] py-5 border-b flex items-center justify-center'>
            <button className='w-10 h-[30px] bg-[#0A8020] text-white rounded-l-full'
            onClick={handleDecrease}>
                -
            </button>   
            <div className='border h-[30px] w-10 text-center'>
                {quantity}
            </div>
            <button className='w-10 h-[30px] bg-[#0A8020] text-white rounded-r-full'
            onClick={handleIncrease}>
                +
            </button>
        </div>
        <div className='w-full h-[40%] grid grid-cols-2 min-h-[55px]'>
             <button className='m-2 border border-[#0A8020] rounded-[4px]'
             onClick={handClose}>
                Huỷ
            </button>
             <button className='m-2 bg-[#0A8020] text-white rounded-[4px]'
             onClick={handleUpdateQuantity}>
                Lưu
            </button>
        </div>
    </div>
  )
}
