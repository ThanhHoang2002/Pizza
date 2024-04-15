import React from 'react'
import Header from '../components/Header'
import Slide from '../components/Slide'
import MethodReceive from '../components/MethodReceive'
import { useSelector } from 'react-redux'
import Login from '../components/Login'
import Alert from '../components/Alert'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const isHiddenLogin = useSelector((state) => state.login.hidden)
  const isHiddenAlert = useSelector((state) => state.alert.hidden)
  const navigate = useNavigate()
  const handleClickMenu = () => {
    navigate('/order')
    window.scrollTo(0, 0); 
  }
  return (
    <div>
      <div className={`${isHiddenLogin===true && isHiddenAlert===true?'':'pointer-events-none brightness-50 h-screen w-[1519px] overflow-hidden'} bg-white`}>
        <div className='h-[64px] bg-white'>
          <Header width="full" showFollowOrder="true"/>
        </div>
        <div className='conten h-auto'>
          <Slide />
          <div className='h-auto w-full flex justify-center' >
            <div className='relative translate-y-[-50px] z-10'>
              <MethodReceive />
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='col-span-2 h-5 flex justify-center items-center relative'>
              <p className='px-[12px] uppercase font-bold text-[1.4rem] z-[1] absolute bg-white'>Khuyến mãi</p>
              <p className='h-[3px] bg-[#e9ebee] w-full absolute'></p>
            </div>
            <div className='h-auto p-[10px] flex items-center justify-end'onClick={handleClickMenu}>
              <img className='w-[70%] h-[190px] cursor-pointer ' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fbanner%2Fbanner%202.jpg?alt=media&token=5b533285-c820-444e-b7b0-1b8abdc32c94' alt=':img' />
            </div>
            <div className='h-auto p-[10px] flex items-center justify-start'onClick={handleClickMenu}>
              <img className='w-[70%] h-[190px] cursor-pointer' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fbanner%2Fbanner%204.jpg?alt=media&token=0d70d97f-5eee-4ff1-8e60-cd9b68b11d56' alt=':img' />
            </div>
            <div className='col-span-2 h-auto flex justify-center items-center'>
              <button className='w-[69.5%] bg-[#0A8020] text-white rounded-[4px] py-[12px] text-sm'
              onClick={handleClickMenu}>
                XEM MENU
              </button>
            </div>
          </div>
        </div>
        <div className='footer h-auto bg-[#000000e6] mt-[20px] flex justify-center pointer-events-none'>
          <div className=' w-[70%]'>
            <div className='grid grid-cols-5'>
              <div className="MuiGrid-root jss1432 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3 MuiGrid-grid-md-2">
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">MENU</h3></a>
                <a className="jss1416" href="/order/DISCOUNT90"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px] '>SIÊU DEAL</p></a>
                <a className="jss1416" href="/order/MYBOX_2023"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MY BOX</p></a>
                <a className="jss1416" href="/order/COMBO"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>COMBO</p></a>
                <a className="jss1416" href="/order/BUY1GET3"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MUA 1 ĐƯỢC 3</p></a>
                <a className="jss1416" href="/order/CHICKEN_LOVER"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>GHIỀN GÀ</p></a>
                <a className="jss1416" href="/order/PIZZA"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>PIZZA</p></a>
                <a className="jss1416" href="/order/STARTER"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MÓN KHAI VỊ</p></a>
                <a className="jss1416" href="/order/DRINK"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>THỨC UỐNG</p></a>
              </div>
              <div className="MuiGrid-root jss1432 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3 MuiGrid-grid-md-2">
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">VỀ CHÚNG TÔI</h3></a>
                <a className="jss1416" href="/order/DISCOUNT90"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Giới Thiệu</p></a>
                <a className="jss1416" href="/order/MYBOX_2023"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Tầm nhìn của chúng tôi</p></a>
                <a className="jss1416" href="/order/COMBO"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Giá trị cốt lõi</p></a>
                <a className="jss1416" href="/order/BUY1GET3"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Vệ sinh an toàn thực phẩm</p></a>
              </div>
              <div className="MuiGrid-root jss1432 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3 MuiGrid-grid-md-2">
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">Tìm cửa hàng</h3></a>
                <a className="jss1416" href="/order/DISCOUNT90"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền bắc</p></a>
                <a className="jss1416" href="/order/MYBOX_2023"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền Trung</p></a>
                <a className="jss1416" href="/order/COMBO"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền Nam</p></a>
              </div>
              <div className="MuiGrid-root jss1432 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3 MuiGrid-grid-md-2">
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">Thông tin tuyển dụng</h3></a>
                <a className="jss1416" href="/order/DISCOUNT90"><p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Cơ hộ nghề nghiệp</p></a>
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">Cần sự hỗ trợ?</h3></a>
                <p className='text-[#0A8020] my-[9px] font-normal leading-5 cursor-pointer text-[16px]'>1234 5678</p>
              </div>
              <div className="MuiGrid-root jss1432 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-3 MuiGrid-grid-md-2">
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">Liên hệ với pizzeria </h3></a>
                <div className='flex'>
                  <img className='mr-[8px] cursor-pointer' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/fb.png' alt=':img' />
                  <img className='mr-[8px] cursor-pointer' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/youtube.png' alt=':img' />
                  <img className='mr-[8px] cursor-pointer' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/email.png' alt=':img' />
                </div>
                <a href="/order"><h3 className="mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]">Tải ứng dụng trên điện thoại</h3></a>
                <div className='flex'>
                  <img className='cursor-pointer h-[64px]' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/App-QR-CODE.png' alt=':img' />
                  <div className='ml-1'>
                    <img className='cursor-pointer h-[30px]' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/appstore.png' alt=':img' />
                    <img className='cursor-pointer h-[30px]' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/playstore.png' alt=':img' />
                  
                  </div>
                </div>
              </div>
            </div>
            <div className='h-auto w-full mt-[10px] border-t py-[20px] border-white flex '>
                <div className='w-[85%]'>
                  <div className='flex'>
                    <p className='pr-[4px] my-[2px] text-white text-[12px] font-normal border-r border-white'>
                        Công ty TNHH Pizza Việt Nam
                    </p>
                    <p className='my-[2px] ml-[4px] text-white text-[12px] font-normal'>
                    Số ĐKKD: 0303902751
                    </p>
                  </div>
                  <div className='py-[4px] text-white text-[12px] font-normal'>
                  Tầng 10, Tòa nhà Opal Office, số 92 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP.HCM, Việt Nam.
                  </div>
                </div>
                <div className='w-[15%] h-auto'>
                  <p className='text-white text-[12px] font-normal mb-[5px] cursor-pointer block text-right'>Điều khoản & Điều kiện</p>
                  <img className='cursor-pointer w-[130px] h-[49px] translate-x-7 ' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/thongbaobocongthuong.png' alt=':img' />
                </div>
            </div> 
          </div> 
        </div>
      </div>
      <div className={`absolute top-[16%] left-[19%] z-50 ${isHiddenLogin?'hidden':''} `}>
        <Login/>
      </div>
      <div className={`absolute top-[40%] left-[35%] z-50 ${isHiddenAlert?'hidden':''}`}>
        <Alert/>
      </div>
    </div>
  )
}

export default Home