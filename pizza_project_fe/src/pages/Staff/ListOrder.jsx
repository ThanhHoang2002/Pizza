/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {CircleStackIcon, ClipboardDocumentListIcon, PowerIcon } from  "@heroicons/react/24/solid";
import { List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import  OrderTable  from '../../components/Staff/OrderTable';
import axios from 'axios';
const ListOrder = () => {
    const [orders1, setOrders1] = useState([]);
    const [Orders2, setOrders2] = useState([]);
    const handleToOrderStaff = () => {
        navigate("/staff/order")
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login-admin');
      }
      useEffect(() => {
        const fetchConfirmedOrders = async () => {
            try {
                if (!localStorage.getItem('token')) {
                    navigate('/login-admin');
                } else {
                    const token = localStorage.getItem('token');
                    const user = JSON.parse(localStorage.getItem('user'));
                    const response = await axios.get(`http://localhost:8080/api/v1/order/getConfirmedOrder/${user.store.storeId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setOrders1(response.data.result)
                }
            } catch(error) {
                console.error('Error:', error);
            }
        };
        const fetchUnconfirmOrder = async () => {
            try {
                if (!localStorage.getItem('token')) {
                    navigate('/login-admin');
                } else {
                    const token = localStorage.getItem('token');
                    const user = JSON.parse(localStorage.getItem('user'));
                    const response = await axios.get(`http://localhost:8080/api/v1/order/getUnconfirmOrder/${user.store.storeId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setOrders2(response.data.result)
                }
            } catch(error) {
                console.error('Error:', error);
            }
        };
        fetchConfirmedOrders();
        fetchUnconfirmOrder()
    }, []);
const navigate = useNavigate();
  return (
    <div>
        <div className={`bg-white flex z-20 `}>
            <div className='w-1/6 h-screen bg-white fixed p-4'>
                <div className='h-[72px] w-full p-4'>
                    <img className='h-10' src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e' alt='logo'/>
                </div>
                <div className=''>
                    <List>
                        <ListItem onClick={handleToOrderStaff}>
                            <ListItemPrefix>
                                <ClipboardDocumentListIcon strokeWidth={3} className="h-6 w-6" />
                            </ListItemPrefix>
                            Đặt hàng
                        </ListItem>
                        <ListItem  selected={true}>
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
            <div className='w-5/6 ml-[250px] flex'>
                <div className='h-screen w-full  p-2 '>
                    <OrderTable title ={"Đơn hàng đã xác nhận"} orders={orders1}/>
                </div>
                <div className='h-screen w-full p-2'>
                    <OrderTable title={"Đơn hàng chưa xác nhận"} orders={Orders2}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ListOrder