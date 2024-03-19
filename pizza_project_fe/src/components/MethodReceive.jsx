import React, { useState } from 'react'

const MethodReceive = () => {
    const [methodReceive, setMethodReceive] = useState(true)
    const [address, setAddress] = useState('')
    const [chosenStore, setChosenStore] = useState({})
   //////////////////////////////////////////////////////////
   const store = [
    {
        name: "Pizza Amazing Số 1",
        address: "Số 1, Đường 3/2, Phường 11, Quận 10, TP.HCM"
    },
    {
        name: "Pizza Amazing Số 2",
        address: "Số 2, Đường 3/2, Phường 11, Quận 10, TP.HCM"
    }
  ]
    /////////////////////////////////////////////////////////
    const changeMethod = (method) => {
        setMethodReceive(method)
        if(method === false) {
            setAddress('')
        }else{
            setChosenStore({})
        }
    }
    const handleDeleteAddress = () => {
        setAddress('')
    }
  return (
    <div className='h-auto grid grid-cols-2 gap-x-1 w-[450px] z-30'>
        <div className={`${methodReceive === true ? 'h-[58px] bg-white text-[#ff0000] transform -translate-y-[3px] transition-transform' : 'bg-[#eaeaea] h-[55px] '} cursor-pointer rounded-t-md  flex justify-center items-center `} onClick={() => changeMethod(true)}>
            <img className='h-[28px]' src={`${methodReceive === true ? 'https://cdn.pizzahut.vn/images/Web_V3/Homepage/delivery.gif':'https://cdn.pizzahut.vn/images/Web_V3/Homepage/bikergray.png'}`} alt=':icon'/>
            <span className='font-bold  pl-2 text-[14px]'>Giao hàng tận nơi</span>
        </div>
        <div className={`${methodReceive === false ? 'h-[58px] bg-white text-[#ff0000] transform -translate-y-[3px] transition-transform' : 'bg-[#eaeaea] h-[55px] '} cursor-pointer rounded-t-md  flex justify-center items-center`} onClick={() => changeMethod(false)}>
            <img className='h-[28px]' src={`${methodReceive === false ?'https://cdn.pizzahut.vn/images/Web_V3/Homepage/pickup.gif' :'https://cdn.pizzahut.vn/images/Web_V3/Homepage/Carryout_gray.png'}`} alt=':icon'/>
            <span className='font-bold pl-2 text-[14px]'>Mua mang về</span>
        </div>
        <div className='h-auto bg-white col-span-2 transform -translate-y-[4px] transition-transform rounded-b-md p-[10px]' style={{ boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)' }}>
            {methodReceive === true ?
                <div className='flex justify-start'> 
                    <div className='w-full'>
                        <input className='w-full h-full border-[#0a8020] border-2 p-[10px] rounded-md text-[0.875rem] focus:outline-none font-medium' type='text' placeholder='Vui lòng cho chúng tôi biết địa chỉ của bạn!'value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div className={`w-[40px] h-[40px] text-[#0A8020] p-[10px] cursor-pointer ${address===''?'hidden':''}`}>
                        <img className='h-[20px] w-[20px] cursor-pointer' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-cancel-30.png?alt=media&token=eff952bd-4c75-4111-b407-b4954c600d4a' alt=':icon' onClick={handleDeleteAddress}/>
                    </div>
                </div>
            :
                <div className=''> 
                    {store.map((item, index) => {
                        return (
                            <div className={`${chosenStore.name === item.name ? 'bg-gray-200' : 'bg-white'} w-full h-[87px] py-[4px] flex justify-start border-b-2 cursor-pointer transition-colors duration-200 ease-in-out`} onClick={() => setChosenStore(item)}>
                                <div className='flex justify-center items-center'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-location-24.png?alt=media&token=28735727-a79c-43f3-9c10-cc85d6bb3152' alt=':icon'/>
                                </div>
                                <div className='pl-3 w-[80%] flex flex-col justify-center'>                           
                                    <div className='font-bold'>{item.name}</div>
                                    <div className='font-medium'>{item.address}</div>
                                </div> 
                                {
                                    chosenStore.name === item.name ? 
                                    <div className='flex justify-center items-center translate-x-5'>
                                        <img className='h-[25px] w-[25px]' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-checkmark-64.png?alt=media&token=c79008a4-ce30-4074-8850-7aad023462de' alt=':icon'/>
                                    </div>
                                    : null
                                }                               
                            </div>
                        )
                    })}
                </div>
            }
            <div>          
                <button className={`${ Object.keys(chosenStore).length === 0 && chosenStore.constructor === Object && address==='' ? 'hidden':''} uppercase w-full bg-[#0A8020] rounded-md text-white font-medium mt-[10px] py-[6px] px-[16px]`}>
                    bắt đầu đặt hàng
                </button>
            </div>  
        </div>
        
    </div>
  )
}

export default MethodReceive