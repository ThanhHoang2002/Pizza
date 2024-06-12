/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import {formatCurrency} from '../../utils'
import Alert from '../../components/Alert';
import { update } from '../../redux/slices/alertSlice';
import Login from '../../components/Login';
import MenuCombo from '../../components/Menu/MenuCombo';
import MenuPizza from '../../components/Menu/MenuPizza';
import MenuFood from '../../components/Menu/MenuFood';
import MenuDrink from '../../components/Menu/MenuDrink';
import MenuSupperDeal from '../../components/Menu/MenuSupperDeal';
import MenuMyBox from '../../components/Menu/MenuMyBox';
import PizzaCart from '../../components/Cart/PizzaCart';
import AlertDeleteCart from '../../components/AlertDeleteCart/AlertDeleteCart';
import { AlerChangeCart } from '../../components/AlertChangeCart/AlerChangeCart';
import FoodCart from '../../components/Cart/FoodCart';
import 'react-toastify/dist/ReactToastify.css';
import ComboDetail from '../../components/ProductDetail/ComboDetail';
import ComboCart from '../../components/Cart/ComboCart';
import MenuChicken from '../../components/Menu/MenuChicken';
import { useNavigate } from 'react-router-dom';
import {CircleStackIcon, ClipboardDocumentListIcon, PowerIcon } from  "@heroicons/react/24/solid";
import { List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import axios from 'axios';
import API_ROUTES from '../../ApiUrl';
import { reset } from '../../redux/slices/orderSlice';
const OrderStaff = () => {
    const isHiddenLogin = useSelector((state) => state.login.hidden)
    const isHiddenAlert = useSelector((state) => state.alert.hidden)
    const isHiddenAlertDeleteCart = useSelector((state) => state.cart.hiddenDelete)
    const isHiddenAlertChangeCart = useSelector((state) => state.cart.hiddenChange)
    const isHiddenComboDetail = useSelector((state) => state.comboDetail.hidden)
    const dispatch = useDispatch()
    const [currentMenu, setCurrentMenu] = useState('SuperDeal');
    const order = useSelector(state => state.order)
    const   handleShowInformation =(value)=>{
        dispatch(update({hidden: false ,text: value}))
    }
    const user = JSON.parse(localStorage.getItem('user'))
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login-admin');
      }
    const navigate = useNavigate()
    const subnavbar =[         
        {
            name: "Siêu deal",
            component: "SuperDeal"
        },
        {
            name: "My Box",
            component: "MyBox"
        },
        {
            name: "Combo",
            component: "Combo"
        },
        {
            name: "pizza",
            component: "Pizza"
        },
        {
            name: "Món khai vị",
            component: "Starter"
        },
        {
            name: "thức uống",
            component: "Drink"
        },
        
        {
            name: "Ghiền Gà",
            component: "Chicken"
        },
    ]
    useEffect(() => {
        if(localStorage.getItem("user") === null){
            navigate('/login-admin')
        }else{
            localStorage.setItem("receiveMethod", "Pickup")
            localStorage.setItem("store", JSON.stringify(user.store) )
        }
    }, [])
    const getComponentByName = (name) => {
        switch (name) {
            case 'SuperDeal':
                return <MenuSupperDeal />;
            case 'MyBox':
                return <MenuMyBox />;
            case 'Combo':
                return <MenuCombo />;
            case 'Pizza':
                return <MenuPizza />;
            case 'Starter':
                return <MenuFood />;
            case 'Drink':
                return <MenuDrink />;
            case 'Chicken':
                return <MenuChicken />;
            default:
                return null;
        }
    };
    const handleToPayment =async () =>{ 
        if(order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length === 0){
            dispatch(update({hidden: false ,text: "Giỏ hàng của bạn hiện đang chưa có sản phẩm nào!"}))
        }else{  
            const orderDetail = {
                name: "",
                phone: "",
                note: "",
                receiveMethod:'DIRECTLY',
                address: "",
                store: user.store,
                paymentMethod: "Thanh toán bằng tiền mặt",
                state: 'Đang chuẩn bị',
                client: null,
                comboInOrders: order.comboInOrders,
                pizzaInOrders: order.pizzaInOrders,
                foodInOrders: order.foodInOrders,
                dayOrder: new Date(),
                staff: user,
              };
              try{
                const response = await axios.post(API_ROUTES.addOrder, orderDetail)
                dispatch(reset()) 
                dispatch(update({hidden: false ,text: `Đặt hàng thành công mã đơn hàng là ${response.data.result.order_id}`}))
              }catch(error){
                dispatch(update({hidden: false ,text: 'Đặt hàng thất bại'}))
              }
        }
    }
    const handleToListOrder =()=>{
        navigate("/staff/list-order")
    }
  return (
    <div>
        <div className={`${isHiddenLogin && isHiddenAlert && isHiddenAlertDeleteCart && isHiddenAlertChangeCart && isHiddenComboDetail?'':'pointer-events-none brightness-50 h-screen  overflow-y-scroll'} bg-white flex z-20`}>
            <div className='w-1/6 h-screen bg-white fixed p-4'>
                <div className='h-[72px] w-full p-4'>
                    <img className='h-10' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e' alt='logo'/>
                </div>
                <div className='text-center font-bold text-xl'>
                    {user.store.name}
                </div>
                <div className='mt-5'>
                    <List>
                        <ListItem selected={true}>
                            <ListItemPrefix>
                                <ClipboardDocumentListIcon strokeWidth={3} className="h-6 w-6" />
                            </ListItemPrefix>
                            Đặt hàng
                        </ListItem>
                        <ListItem onClick={handleToListOrder}>
                            <ListItemPrefix>
                                <CircleStackIcon strokeWidth={3} className="h-6 w-6" />
                            </ListItemPrefix>
                            Đơn Hàng
                        </ListItem>
                        <ListItem onClick={handleLogout}>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Đăng xuất
                            </ListItem>
                     </List>
                </div>
            </div>
            <div className='w-2/3 ml-[250px]'>
                <nav className='relative z-0 flex justify-center'>
                    <div className='fixed h-12 bg-white border-y flex justify-center z-20 items-center rounded-lg shadow-lg'>
                        {
                            subnavbar.map((item, index)=>
                                <button key={index} 
                                onClick={()=>setCurrentMenu(item.component)}
                                className={`h-full w-[130px] px-3 py-[6px] uppercase text-[15px] font-bold text-slate-600 flex justify-center items-center ${item.component===currentMenu?'text-white bg-[url("https://cdn.pizzahut.vn/images/Web_V3/Menu/backgroundCategory.png")] bg-cover h-full':'hover:text-red-600 '}`}>
                                    {item.name}
                                </button>
                            )
                        }
                    </div>
                    <div className='relative top-12 '>
                        {getComponentByName(currentMenu)}
                    </div>
                </nav>
            </div>
            <div className='w-1/6 fixed right-0 h-screen bg-white border-l shadow-sm'>
                <div className='w-full h-10 text-center font-medium text-xl'>
                ----- Giỏ Hàng ----
                </div>
                <div className='h-[480px] overflow-y-auto'>
                    {(order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length)===0?
                    <div className='h-[48px] bg-[rgb(232,244,253)] px-[16px] py-[6px]'>
                        <div className='flex items-center h-full w-full'>
                            <div className='pr-3'>
                                <img className= "text-[#2196f3] h-[22px] " src='https://img.icons8.com/material-outlined/24/2196f3/checked--v1.png' alt=''/>
                            </div>
                            <div className='text-center text-sm w-3/4'>
                                Trống
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        {
                            order.pizzaInOrders.map((item, index)=>(
                                <PizzaCart key={index} pizza={item} index={index}/>
                            ))
                        }
                        {
                            order.foodInOrders.map((item, index)=>(
                                <FoodCart key={index} food={item} index={index}/>
                            ))
                        }
                        {
                            order.comboInOrders.map((item, index)=>(
                                <ComboCart key={index} combo={item} index={index}/>
                            ))
                        }
                    </div>
                    }
                </div>
                <div className='w-full h-[46px] p-[5px]'>
                    <button className='uppercase w-full h-full border border-[#0A8020] rounded-[4px] text-[#0A8020] px-[15px] py-[5px] bg-white hover:bg-[rgba(10,128,32,0.04)] duration-300'
                    onClick={()=>handleShowInformation("Hiện tại bạn không có mã giảm giá khả dụng")}>
                        sử dụng voucher
                    </button>
                </div>
                <div className='bg-[#f5f7f9] h-[106px] p-[5px] '>
                    <div className='flex justify-between'>
                        <div className='font-medium'>Tổng</div>
                        <div className=''>{formatCurrency(order.total)}</div>
                    </div>
                </div>
                <div className='w-full h-[56.5px] p-[10px]'>
                    <button className='bg-[#0A8020] text-white rounded-[4px] h-full w-full text-sm flex items-center text-end hover:shadow-xl'onClick={handleToPayment}>
                        <div className='h-4 w-[50%] '>THANH TOÁN</div>
                        <div className='h-4 w-[50%] pr-4 '>{formatCurrency((order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length)===0?0:order.total)}</div>
                    </button>
                </div>
            </div>
        </div>
        <div className={`absolute top-[16%] left-[19%] z-50`}>
            {
                isHiddenLogin?'':<Login/>
            }
        </div>
        <div className={`absolute top-[40%] left-[35%] z-50 `}>
            { 
                isHiddenAlert?'':<Alert/>
            }
        </div>
        <div className={`absolute top-[40%] left-[35%] z-50 `}>
            {
                isHiddenAlertDeleteCart?'':<AlertDeleteCart/>
            }
        </div>
        <div className={`absolute top-[30%] left-[35%] z-50 `}>
           {
               isHiddenAlertChangeCart?'':<AlerChangeCart/>
           }
        </div>
        <div className={`absolute top-[5%] left-[15%] z-50`}>
            {
                isHiddenComboDetail?"":<ComboDetail/>
            }
            
        </div>
    </div>
  )
}

export default OrderStaff