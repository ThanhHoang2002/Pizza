import React from 'react'
import  { useSelector } from 'react-redux'
import { formatCurrency } from '../../utils'
import { useDispatch } from 'react-redux'
import { show } from '../../redux/slices/comboDetailSlice'
import { changeState } from '../../redux/slices/methodReceiveSlice'
import { updateOrder } from '../../redux/slices/orderSlice'
import { toast } from 'react-toastify'
const ComboDetail = () => {
  const combo = useSelector(state => state.comboDetail.combo)
  const order = useSelector(state => state.order)
  const dispatch = useDispatch()
  const handClose = () =>{
    dispatch(show({hidden: true, combo: {}}))
  }
  const handleAddCombo = (item) =>{
    if(localStorage.getItem('store') === null){
      dispatch(changeState({hidden: false}))
    }else{
        const existingComboIndex= order.comboInOrders.findIndex(ComboInOrder =>  ComboInOrder.combo.id === item.id)
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
        dispatch(show({hidden: true, combo: {}}))
        toast.success('Thêm vào giỏ hàng thành công')
    }
  }
  return (
      <div className='relative bg-white text- h-[90vh] w-[70vw] rounded-[4px]'>
        <div className='sticky p-3 pl-2'>
          <button className={`flex  px-2 py-[6px] h-10 translate-x-[8px] translate-y-[6px] hover:bg-[rgba(10,128,32,0.04)] rounded-md`}
            onClick={handClose}>
            <img width="24" height="24" src="https://img.icons8.com/forma-regular/24/0a8020/back.png" alt="back"/>
            <p className='uppercase text-[#0A8020]'>Quay Lại</p>
          </button>
        </div>
        <div className='px-[10px] flex justify-between'>
          <div className='w-[50%] p-[6px]'>
            <p className='uppercase font-medium text-xl px-[10px] text-[rgba(0,0,0,0.54)]'>{combo.name}</p>
            <p className='text-[rgba(0,0,0,0.54)] px-[10px]'>{combo.des}</p>
            <div className='mt-5'>
              <div className='flex justify-between w-[50%]'>
                <div className='text-[#231f20] px-[10px]'>Giá COMBO:</div>
                <div>{formatCurrency(combo.price)}</div>
              </div>
              <div className='flex justify-between w-[50%]'>
                <div className='text-[#231f20] px-[10px]'>Phí Giao Hàng:</div>
                <div>{formatCurrency(35000)}</div>
              </div>
            </div>
          </div>
          <div className='w-[34%] flex items-center'> 
            <img src={combo.image} alt='combo'/>
          </div>
        </div>
        <div className='relative p-[10px]'>
          <div className='h-auto'>
            {
              combo.pizzaInCombos?.map((pizzaInCombo, index)=>(
                <div key={index} className='flex justify-between border border-[#0A8020] rounded-[4px] p-[15px] mb-1'>
                  <div className=''>
                      <p className='text-[#0A8020] '>{pizzaInCombo.quantity}{" x "}{pizzaInCombo.pizza.pizzaType.name}</p>
                      <p>{"+ "}{pizzaInCombo.base}({pizzaInCombo.pizza.size})</p>
                  </div>
                  <div className='flex items-center'>
                    <p>{formatCurrency(pizzaInCombo.pizza.price)}</p>
                  </div>
                </div>
              ))
            }
            {
              combo.foodInCombos?.map((foodInCombo, index)=>(
                <div key={index} className='flex justify-between items-center border border-[#0A8020] rounded-[4px] p-[15px] mb-1'>
                  <div className=''>
                      <p className='text-[#0A8020] '>{foodInCombo.quantity}{" x "}{foodInCombo.food.name}</p>            
                  </div>
                  <div className='flex items-center'>
                    <p>{formatCurrency(foodInCombo.food.price)}</p>
                  </div>
                </div>
              ))
            }
          </div>       
        </div>
        <div className='absolute bottom-[1%] w-[98%] left-[1%]'>
          <button className='uppercase w-full bg-[#0A8020] text-white rounded-[4px] h-[36px]'
            onClick={handleAddCombo}>
              Thêm vào giỏ hàng
          </button>
        </div>
        <button className={`absolute top-[-10px] right-[-15px]`}
                onClick={handClose}>
            <img className='w-[30px]' src='https://cdn.pizzahut.vn/images/Web_V3/Member/close.png' alt='close'></img>
        </button>
      </div>
  )
}

export default ComboDetail