import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../redux/slices/cartSlice'
import { deleteItemInOrder } from '../../redux/slices/orderSlice'
const AlertDeleteCart = (props) => {
    const dispatch = useDispatch()
    const itemName = useSelector(state => state.cart.itemName)
    const index = useSelector(state => state.cart.index)
    const type = useSelector(state => state.cart.type)
    const handClose = () => {
        dispatch(deleteCart({hiddenDelete: true}))
    }
    const handDelete = () => {
        dispatch(deleteItemInOrder({type: type, index: index}))
        dispatch(deleteCart({hiddenDelete: true}))
    }
  return (
    <div className='px-5 pt-6 pb-2 bg-white h-auto w-auto rounded-md min-h-[185px] min-w-[405px]'>
        <div className='flex items-center justify-center py-6 px-4 min-h-[90px] border-b'>
            <h1 className='text-3xl font-bold'>
              {itemName}
            </h1>
        </div>
        <div className='w-full h-[40%] grid grid-cols-2 min-h-[55px]'>
             <button className='m-2 border border-[#0A8020] rounded-[4px]'
             onClick={handClose}>
                Huỷ
            </button>
             <button className='m-2 bg-[#0A8020] text-white rounded-[4px]'
             onClick={handDelete}>
                Xóa
            </button>
        </div>
    </div>
  )
}

export default AlertDeleteCart