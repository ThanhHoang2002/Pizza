import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeState } from '../redux/slices/methodReceiveSlice'
import API_ROUTES from "../ApiUrl/index"
const MethodReceive = (props) => {
    const [methodReceive, setMethodReceive] = useState(true)
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address'))?.description || '')
    const [chosenStore, setChosenStore] = useState({})
    const [chosenAddress, setChosenAddress] = useState(JSON.parse(localStorage.getItem('address')) || '')
    const APiKey = 'TPtlQJJsrOvbIegiMhkf9ChSvNUXpQFjPWbE3BZM'
    const [data, setData] = useState([]);
    const typingTimeoutRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showClose = props.showClose;
    
    //////////////////////////////////////////////////////////
    const [store, setStore] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_ROUTES.getStoreData);
          const data = await response.json();
          setStore(data); 
        } catch (error) {
          console.error('Lỗi khi fetch dữ liệu từ API:', error);
        }
      };
      fetchData(); // Gọi hàm fetchData khi component được render
    }, [])
      /////////////////////////////////////////////////////////
    const changeMethod = (method) => {
        setMethodReceive(method)
        if(method === false) {
            setAddress('')
            setChosenStore({})
            setData([])
            setChosenAddress('')
            localStorage.removeItem('address');
            localStorage.removeItem('store');
        }else{
            localStorage.removeItem('store');
            setChosenStore({})
        }
    }
    const handleDeleteAddress = () => {
        setAddress('')
        setData([])
        setChosenStore({})
        setChosenAddress('')
        localStorage.removeItem('address');
        localStorage.removeItem('store');
    }
    const handleChosenStore = (item) => {
        if (item.name !== chosenStore?.name) {
            setChosenStore(item);
        }
    }
    const handleAutocomplete = (value) => {
        setAddress(value)
        const autoComplete = async () => {
            try {
                const response = await axios.get(`https://rsapi.goong.io/Place/AutoComplete?api_key=${APiKey}&input=${value}&limit=5`);
                setData(response.data.predictions);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }; 
    
        // Khi 'address' thay đổi, hủy timeout hiện tại (nếu có)
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
    
        // Thiết lập timeout mới
        typingTimeoutRef.current = setTimeout(() => {
            autoComplete();
        }, 500); // Sau 500ms sẽ gửi yêu cầu HTTP
    }
    const handleChosenAddress = (item) => {
        setAddress(item.description)
        setChosenAddress(item)
        setData([])
    }
    const getLocationDetails = async (placeId) => {
        try {
            const response = await axios.get(`https://rsapi.goong.io/Place/Detail?place_id=${placeId}&api_key=${APiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching location details:', error);
            throw error;
        }
    };
    const fetchAndProcessLocation = async () => {
        try {
            const placeId = chosenAddress.place_id;
            const locationData = await getLocationDetails(placeId);
    
            // Xử lý kết quả từ getLocationDetails
            const lat = String(locationData.result.geometry.location.lat);
            const lng = String(locationData.result.geometry.location.lng);
            const formattedLocation = lat + ',' + lng;
    
            return formattedLocation; // Trả về chuỗi định dạng vị trí
        } catch (error) {
            console.error('Error fetching and processing location:', error);
            throw error; // Xử lý lỗi nếu cần thiết
        }
    };
    const fetchAndProcessDistance = async (location,store) => {
        try {
            const response = await axios.get(`https://rsapi.goong.io/Direction?origin=${location}&destination=${store}&vehicle=bike&api_key=${APiKey}`);
            const distance = response.data.routes[0].legs[0].distance.value
            return distance;
        } catch (error) {
            console.error('Error fetching and processing distance:', error);
            throw error;
        }
    };
    const handleSaveAddress = async () => {
        if (methodReceive === true) {
            localStorage.setItem('address', JSON.stringify(chosenAddress));
            const locationResult = await fetchAndProcessLocation();
            const minDistanceStore = store.reduce(async (minStorePromise, currentStorePromise) => {
                const minStore = await minStorePromise;
                const currentStore = await currentStorePromise;
                const nowDistance = await fetchAndProcessDistance(locationResult, minStore.local)
                                    .catch((error) => {
                                        console.log('Error fetching and processing distance:', error);
                                    });
                const nextDistance = await fetchAndProcessDistance(locationResult, currentStore.local)
                                    .catch((error) => {
                                        console.log('Error fetching and processing distance:', error);
                                    });;
                if (nowDistance > nextDistance) {
                    return currentStore;
                } else {
                    return minStore;
                }
            }, Promise.resolve(store[0]));
            localStorage.setItem('store', JSON.stringify(await minDistanceStore));
            localStorage.setItem('receiveMethod', 'Delivery')
            navigate('/order')
        } else {
            localStorage.removeItem('address');
            localStorage.setItem('store', JSON.stringify(chosenStore));
            localStorage.setItem('receiveMethod', 'Pickup')
            navigate('/order')
        }
        dispatch(changeState({ hidden: true }));
        window.scrollTo(0, 0); // Cuộn ngay lập tức lên đầu của trang
    };
    const handClose = () => {
        dispatch(changeState({ hidden: true }));
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
                <div className=' flex justify-start'> 
                    <div className='w-full'  >
                        <input className='w-full h-full border-[#0a8020] border-2 p-[10px] rounded-md text-[0.875rem] focus:outline-none font-medium' type='text' placeholder='Vui lòng cho chúng tôi biết địa chỉ của bạn!'value={address} onChange={(e)=>handleAutocomplete(e.target.value)}/>                 
                        <div className='absolute w-[87%] bg-white'>
                            {data?.map((item, index) => {
                            return (
                                <div key={index} className={`bg-white w-full h-[60px] py-[4px] pl-4 flex justify-start border-b-2 border-x-2 b transition-colors duration-75 ease-in-out hover:brightness-95`} onClick={()=> handleChosenAddress(item)}>
                                    <div className='flex items-center justify-center'>
                                        <img className='h-[15px]' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Ficons8-location-24.png?alt=media&token=f4077309-d730-447b-996f-ea74bff48f4e' alt=':icon'/>
                                    </div>                       
                                    <div className='pl-3 w-[93%] flex flex-col justify-center'>                           
                                        <div className='font-bold text-sm'>{item.structured_formatting.main_text}</div>
                                        <div className='text-sm truncate '>{item.structured_formatting.secondary_text}</div>
                                    </div>                                                    
                                </div>
                            )
                            })}
                        </div>
                    </div>
                    <div className={`w-[40px] h-[40px] text-[#0A8020] p-[10px] cursor-pointer ${address===''?'hidden':''}`}>
                        <img className='h-[20px] w-[20px] cursor-pointer' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-cancel-30.png?alt=media&token=eff952bd-4c75-4111-b407-b4954c600d4a' alt=':icon' onClick={handleDeleteAddress}/>
                    </div>
                </div>
            :
                <div className='max-h-[250px] overflow-y-auto'> 
                    {store.map((item, index) => {
                        return (
                            <div key={index} className={`${chosenStore.name === item.name ? 'bg-gray-200' : 'bg-white'} w-full h-[87px] py-[4px] flex justify-start border-b-2 cursor-pointer transition-colors duration-200 ease-in-out `} onClick={()=> handleChosenStore(item)}>
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
                <button className={`${ Object.keys(chosenStore).length === 0 && chosenStore.constructor === Object && chosenAddress==='' ? 'hidden':''} uppercase w-full bg-[#0A8020] rounded-md text-white font-medium mt-[10px] py-[6px] px-[16px]`}
                onClick={handleSaveAddress}>
                    bắt đầu đặt hàng
                </button>
            </div>  
        </div>
        <button className={`${showClose?"absolute top-[-10px] right-[-15px]":"hidden"}`}
                onClick={handClose}>
            <img className='w-[30px]' src='https://cdn.pizzahut.vn/images/Web_V3/Member/close.png' alt='close'></img>
        </button>
    </div>
  )
}

export default MethodReceive