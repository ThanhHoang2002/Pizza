import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { show } from '../../redux/slices/comboDetailSlice'
import { toast } from 'react-toastify'
import { changeState } from '../../redux/slices/methodReceiveSlice'
import { updateOrder } from '../../redux/slices/orderSlice'
const Combo = (props) => {
    const {item, index} = props
    const order = useSelector(state => state.order)
    const dispatch = useDispatch()
    const handleAddCombo = (item) =>{
      if(localStorage.getItem('store') === null){
        dispatch(changeState({hidden: false}))
      }else{
          const existingComboIndex= order.comboInOrders.findIndex(ComboInOrder =>  ComboInOrder.combo.comboId === item.comboId)
          const updatedComboInOrder = [...order.comboInOrders];
          if(existingComboIndex !== -1){
              updatedComboInOrder[existingComboIndex] = {
                  ...updatedComboInOrder[existingComboIndex],
                  quantity: updatedComboInOrder[existingComboIndex].quantity + 1
              };
          } else {
              const comboInOrders = {
                  quantity: 1,
                  priceAtBill: item.price,
                  combo: item
              }
              updatedComboInOrder.push(comboInOrders);
          }
          dispatch(updateOrder({ ...order,total: order.total+item.price , comboInOrders: updatedComboInOrder }));
          toast.success('Thêm vào giỏ hàng thành công')
      }
    }
    const handleShowDetailCombo = () =>{
      dispatch(show({hidden: false, combo: item}))
    }
  return (
    <div key={index} className='relative m-[6px] h-auto border rounded-md shadow-md'>
              <div className='group'
              onClick={handleShowDetailCombo}>
                <div className=' overflow-hidden'>
                  <img className='object-cover h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md' src={item.image} alt='combo'/>
                </div>
                <div className='flex justify-between px-[10px] h-[26px] pb-1 cursor-pointer group-hover:bg-slate-50'>
                  <p className='uppercase font-bold text-sm'>{item.name}</p>
                  <p className='uppercase font-bold text-xs bg-[#FFC800] px-[3px] py-[2px] text-[#313131]'>new</p>
                </div>
                <div className='absolute h-[30px] w-[15%] rounded-[25px] top-[3%] right-[3%] bg-[hsla(0,0%,100%,.9)] flex items-center justify-center cursor-pointer group-hover:'>
                  <span>Chi Tiết</span>
                </div>
              </div>
              <div className='h-[60px] px-[10px]'>
                <p className='truncate-3-lines text-sm text-[rgba(0,0,0,0.87)]'>{item.des}</p>
              </div>
              <div className='h-[50px] border-t px-[10px] py-2 flex justify-end items-center'>
                <button className='bg-[#0A8020] w-[130px] h-full rounded text-white uppercase hover:shadow-md'
                onClick={()=>handleAddCombo(item)}>chọn</button> 
              </div>
            </div>
  )
}

export default Combo