import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
const SignUp = () => {
  return (
    <div >
        <div className='bg-white h-[64px] '>
            <Header/>
        </div>
        <div className='h-screen flex justify-center items-center bg-slate-500'>
            <Login/>
        </div>
    </div>
  )
}

export default SignUp