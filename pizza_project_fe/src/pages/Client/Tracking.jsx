/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/Login'
import { useSelector } from 'react-redux'
const Tracking = (props) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const hanldeClick = () => {
        navigate(`/thank-you/${input}`)
    }
    const isHiddenLogin = useSelector((state) => state.login.hidden)
  return (
        <div> 
        <div className={`${isHiddenLogin ?'':'pointer-events-none brightness-50 h-screen  overflow-y-scroll'} bg-white z-20`}>
            <div className="h-[64px] bg-white">
            <Header
                width="full"
            />
            </div>
            <div className='w-full h-screen flex justify-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
                <div className='w-[600px] h-full bg-white p-4 text-center' >
                    <h6 className='uppercase font-bold text-[1.25rem] leading-[1.6]'>Kiểm tra đơn hàng</h6>
                    <input className='w-full h-[40px] mt-5 py-[10.5px] px-[14px] border rounded-[4px] border-[rgba(0,0,0,0.54)] focus:outline-none focus:border-[#0A8020] focus:border-2'
                    placeholder='Mã đơn hàng *'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}/>
                    <button className='w-full h-[36.5px] mt-[12px] bg-[#0A8020] text-white rounded-[4px] uppercase'
                    onClick={hanldeClick}>Tìm kiếm</button>
                </div>
            </div>   
        </div>
        <div className={`absolute top-[16%] left-[19%] z-50`}>
                {
                    isHiddenLogin?'':<Login/>
                }
        </div>
    </div>
  )
}

export default Tracking