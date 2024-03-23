import Header from '../components/Header'
import { useSelector } from 'react-redux'
import React from 'react';

const Order = () => {
    const isHiddenLogin = useSelector((state) => state.login.hidden)
    const isHiddenAlert = useSelector((state) => state.alert.hidden)
  return (
    <div>
        <div className={`${isHiddenLogin===true && isHiddenAlert===true?'':'pointer-events-none brightness-50 h-screen w-[1519px] overflow-hidden'} bg-white flex`}>
            <div className='w-3/4 bg-slate-400'>
                <div className='h-[64px] bg-white'>
                    <Header width="3/4"/>
                </div>
            </div>
            <div className='w-1/4 h-screen bg-red-500'>
                
            </div>
        </div>
    </div>
  )
}

export default Order