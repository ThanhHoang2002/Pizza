import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';
import {formatCurrency} from '../utils'
import Alert from '../components/Alert';
import { update } from '../redux/slices/alertSlice';
import Login from '../components/Login';
import MenuCombo from '../components/Menu/MenuCombo';
import MenuPizza from '../components/Menu/MenuPizza';
import MenuFood from '../components/Menu/MenuFood';
import MenuDrink from '../components/Menu/MenuDrink';
import MenuVeggiePizza from '../components/Menu/MenuVeggiePizza';
import MenuSupperDeal from '../components/Menu/MenuSupperDeal';
import MenuMyBox from '../components/Menu/MenuMyBox';
import PizzaCart from '../components/Cart/PizzaCart';
import AlertDeleteCart from '../components/AlertDeleteCart/AlertDeleteCart';
import { AlerChangeCart } from '../components/AlertChangeCart/AlerChangeCart';
import FoodCart from '../components/Cart/FoodCart';
import MethodReceive from '../components/MethodReceive';
import 'react-toastify/dist/ReactToastify.css';
import ComboDetail from '../components/ProductDetail/ComboDetail';
import ComboCart from '../components/Cart/ComboCart';
const Order = () => {
    const isHiddenLogin = useSelector((state) => state.login.hidden)
    const isHiddenAlert = useSelector((state) => state.alert.hidden)
    const isHiddenAlertDeleteCart = useSelector((state) => state.cart.hiddenDelete)
    const isHiddenAlertChangeCart = useSelector((state) => state.cart.hiddenChange)
    const isHiddenMethodReceive = useSelector((state) => state.methodReceive.hidden)
    const isHiddenComboDetail = useSelector((state) => state.comboDetail.hidden)
    const dispatch = useDispatch()
    const [currentMenu, setCurrentMenu] = useState('SuperDeal');
    const order = useSelector(state => state.order)
    const   handleShowInformation =(value)=>{
        dispatch(update({hidden: false ,text: value}))
    }
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
        {
            name: "Pizza Chay",
            component: "Veggie"
        },
    ]
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
                return <MenuFood />;
            case 'Veggie':
                return <MenuVeggiePizza />;
            default:
                return null;
        }
    };
  return (
    <div>
        <div className={`${isHiddenLogin && isHiddenAlert && isHiddenAlertDeleteCart && isHiddenAlertChangeCart && isHiddenMethodReceive && isHiddenComboDetail?'':'pointer-events-none brightness-50 h-screen  overflow-y-scroll'} bg-white flex z-20`}>
            <div className='w-3/4'>
                <div className='h-[64px] bg-white z-30'>
                    <Header width="3/4" showAddress="true"/>
                </div>
                <nav className='relative z-0'>
                    <div className='fixed h-12 w-[75%] bg-white border-y flex justify-center z-20'>
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
            <div className='w-1/4 fixed right-0 h-screen bg-white border-l shadow-sm'>
                <div className='w-full h-10 text-center font-medium text-xl'>
                ----- Giỏ Hàng ----
                </div>
                <div className='h-[480px]'>
                    {(order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length)===0?
                    <div className='h-[48px] bg-[rgb(232,244,253)] px-[16px] py-[6px]'>
                        <div className='flex items-center h-full w-full'>
                            <div className='pr-3'>
                                <img className= "text-[#2196f3] h-[22px] " src='https://img.icons8.com/material-outlined/24/2196f3/checked--v1.png' alt=''/>
                            </div>
                            <div className='text-center text-sm'>
                                Không có sản phẩm trong giỏ hàng
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
                    <div className='flex justify-between'>
                        <div className='flex justify-between w-[50%] cursor-pointer' onClick={()=>handleShowInformation("Điều khoản và điều kiện áp dụng Giảm giá Thành Viên được quy định theo Chương Trình Khách Hàng thân thiết của Pizza Hut Việt Nam.")}>
                            <div className='font-medium '>Giảm T.Viên</div>
                            <div className='h-[24px] w-[24px]'>
                                <img src='https://img.icons8.com/ios-glyphs/30/4D4D4D/info--v1.png'
                                alt='information'/>
                            </div>
                        </div>
                        <div className='text-[#ff0000]'>{formatCurrency(0)}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-between w-[50%] cursor-pointer' onClick={()=>handleShowInformation("Chi tiết về điều khoản và điều kiện áp dụng được quy định theo các chương trình khuyến mại của Pizza Hut tại từng thời điểm cụ thể.")}>
                            <div className='font-medium '>Giảm K.mại</div>
                            <div className='h-[24px] w-[24px]'>
                                <img src='https://img.icons8.com/ios-glyphs/30/4D4D4D/info--v1.png'
                                alt='information'/>
                            </div>
                        </div>
                        <div className='text-[#ff0000]'>{formatCurrency(0)}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-between w-[50%] cursor-pointer' onClick={()=>handleShowInformation("Miễn phí cho đơn hàng có giá trị từ 89.000đ đối với các sản phẩm lẻ. Phí giao hàng 22.000đ cho các sản phẩm combo hoặc chương trình khuyến mãi.")}>
                            <div className='font-medium '>Phí Giao Hàng.</div>
                            <div className='h-[24px] w-[24px]'>
                                <img src='https://img.icons8.com/ios-glyphs/30/4D4D4D/info--v1.png'
                                alt='information'/>
                            </div>
                        </div>
                        <div>{formatCurrency((order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length)===0?0:35000)}</div>
                    </div>
                </div>
                <div className='w-full h-[56.5px] p-[10px]'>
                    <button className='bg-[#0A8020] text-white rounded-[4px] h-full w-full text-sm flex items-center text-end hover:shadow-xl'>
                        <div className='h-4 w-[50%] '>THANH TOÁN</div>
                        <div className='h-4 w-[50%] pr-4 '>{formatCurrency((order.pizzaInOrders.length+ order.foodInOrders.length + order.comboInOrders.length)===0?0:order.total+35000)}</div>
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
        <div className={`absolute top-[30%] left-[35%] z-50 `}>
            {
                isHiddenMethodReceive?'':<MethodReceive showClose = "true"/>    
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

export default Order