import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/slices/alertSlice'

const Alert = () => {
    const text = useSelector((state) => state.alert.text)
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(update({hidden: true ,text: ''}))
    }
  return (
    <div className='w-[444px] bg-white rounded-[4px] relative shadow-xl'>
        <div className='px-[24px] pt-[20px] pb-[8px] text-center'>
            {text}
        </div>
        <div className='p-2'>
            <button className='w-full px-4 py-[6px] bg-[#0A8020] text-white rounded-[4px]' onClick={handleClick}>
                OK
            </button>
        </div>
    </div>
  )
}

export default Alert