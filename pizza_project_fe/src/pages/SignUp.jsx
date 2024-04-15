import React, { useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../components/Login'
import Alert from '../components/Alert'
import { update } from '../redux/slices/alertSlice'
const SignUp = () => {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState()
  const [gender, setGender] = useState('M')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRepassword] = useState('')
  const [hiddenPassword,setHiddenPassword] = useState(true)
  const [hiddenRePassword,setHiddenRePassword] = useState(true)
  const isHiddenLogin = useSelector((state) => state.login.hidden)
  const isHiddenAlert = useSelector((state) => state.alert.hidden)
  const dispatch = useDispatch()
  const isValidVietnamesePhoneNumber=(phone) => {
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;
    return regex.test(phone);
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(password!==rePassword){
      dispatch(update({hidden: false ,text: 'Mật khẩu và nhập lại mật khẩu chưa trùng khớp'}))
    }else if(password.length<6){
      dispatch(update({hidden: false ,text: 'Mật khẩu phải lớn hơn 6 kí tự'}))
    }else if(isValidVietnamesePhoneNumber(phone)===false){
      dispatch(update({hidden: false ,text: 'Số điện thoại không hợp lệ'}))
    }
}
  return (
    <div>
      <div className={`${isHiddenLogin===true && isHiddenAlert===true ? '':'pointer-events-none brightness-50 '}h-screen relative bg-[url("https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fbackground%2Fbg.jpg?alt=media&token=486729de-f719-4d06-b818-adef3135a938")]`} >
          <div className='bg-white h-[64px] '>
            <Header width="full" backButton="true" showFollowOrder="true"/>
          </div>
          <div className='w-[960px] translate-x-[30%] translate-y-14 shadow-xl '>
            <img src='https://cdn.pizzahut.vn/images/Web_V3/Member/3054x201.jpg' alt='chao mung'/>
            <div className='px-[45px] pb-[20px] bg-white'>
              <div className='text-center pt-[10px] pb-[4px]'>
                <p className='font-bold text-[#A80000] text-[25px]'>🍕🍕 TÍCH ĐIỂM ĐỔI PIZZA NÀO!</p>
                <p> THAM GIA PIZERRIA REWARDS <br/> VÀ BẮT ĐẦU HÀNH TRÌNH TÍCH ĐIỂM CỦA BẠN!</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='flex'>
                  <div className='w-[50%] mr-[12px] text-left'>
                    <div className='mt-[10px]'>
                      <label className='font-bold'>Tên *</label>
                      <input className='w-full h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]' value={name} onChange={(e)=>setName(e.target.value)} type='text' required/>             
                    </div>
                    <div className='flex mt-[5px]'>
                      <div className='w-[50%] p-[6px]'>
                        <label className='font-bold'>Ngày sinh *</label>
                        <input className='w-full h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]'value={birthday} onChange={(e)=>setBirthday(e.target.value)} type='date' required/>             
                      </div>
                      <div className='w-[50%] p-[6px]'>
                        <label className='font-bold'>Giới tính *</label>
                        <select className='w-full h-[40px] py-[4px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]' value={gender} onChange={(e)=>setGender(e.target.value)}>
                          <option value="M">Nam</option>
                          <option value="W">Nữ</option>
                          <option value="D">Khác</option>
                        </select>            
                      </div>         
                    </div>
                    <div className='mt-[10px]'>
                      <label className='font-bold'>Số điện thoại *</label>
                      <input className='w-full h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]'value={phone} onChange={(e)=>setPhone(e.target.value)} type='text' required/>             
                    </div>
                  </div>
                  <div className='w-[50%] ml-[12px] text-left' >
                    <div className='mt-[10px]'>
                      <label className='font-bold'>Email *</label>
                      <input className='w-full h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]'value={email} onChange={(e)=>setEmail(e.target.value)} type='email' required/>             
                    </div>
                    <div className='mt-[11px]'>
                      <label className='font-bold'>Mật khẩu *</label>
                      <div className='flex'>
                        <input className='w-[90%] h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]'value={password} onChange={(e)=>setPassword(e.target.value)} type={`${hiddenPassword===true?'password':'text'}`} required/>             
                        {
                          hiddenPassword === false ?
                          <img className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-eye-30.png?alt=media&token=b5825d15-562b-43b6-8c33-b937a20a5ba6' alt='eye' onClick={() => setHiddenPassword(true)}></img>
                          :
                          <img className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-hide-24.png?alt=media&token=bcb6d1a8-da9f-4033-94f4-ecb7d84b64d5' alt='eye' onClick={() => setHiddenPassword(false)}></img>
                        }           
                      </div>
                    </div>
                    <div className='mt-[16px]'>
                      <label className='font-bold'>Xác nhận mật khẩu *</label>
                      <div className='flex'>
                        <input className='w-[90%] h-[40px] py-[10.5px] px-[14px] border border-[rgb(188,188,188)] rounded-[4px] hover:border-[rgba(0,0,0,0.7)]'value={rePassword} onChange={(e)=>setRepassword(e.target.value)} type={`${hiddenRePassword===true?'password':'text'}`} required/>             
                        {
                          hiddenRePassword === false ?
                          <img className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-eye-30.png?alt=media&token=b5825d15-562b-43b6-8c33-b937a20a5ba6' alt='eye' onClick={() => setHiddenRePassword(true)}></img>
                          :
                          <img className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-hide-24.png?alt=media&token=bcb6d1a8-da9f-4033-94f4-ecb7d84b64d5' alt='eye' onClick={() => setHiddenRePassword(false)}></img>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full flex items-center justify-center mt-7'>
                  <button className='h-[36.5px] w-[435px] px-[16px] py-[6px] bg-[#0A8020] rounded-[4px] text-white uppercase '> Đăng ký</button>
                </div>
              </form>
          </div>
        </div>     
      </div>
      <div className={`absolute top-[16%] left-[19%] z-50  `}>
        {
          isHiddenLogin===false ? <Login/> : ''
        }
      </div>
      <div className={`absolute top-[40%] left-[35%] z-50 `}>
        {
          isHiddenAlert===false ? <Alert/> : ''
        }
      </div>
    </div>
  )
}

export default SignUp