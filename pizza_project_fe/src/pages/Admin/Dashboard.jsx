/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SidebarWithLogo } from '../../components/Admin/SideBar';
import { NavBar } from '../../components/Admin/NavBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import PowerBi from '../../components/Admin/PowerBi';
import {TablePizza} from '../../components/Admin/TablePizza';
import { translate } from '../../utils';
import { TableFood } from '../../components/Admin/TableFood';
import { TableCombo } from '../../components/Admin/TableCombo';
import AddPizza from './AddPizza';
import AddFood from './AddFood';
import ReportGenerator from './ReportGenerator';

const Dashboard = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lastPart = pathParts[pathParts.length - 1];
  const [currentPage, setCurrentPage] = useState(translate(lastPart.charAt(0).toUpperCase() + lastPart.slice(1)));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login-admin');
  }
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if(localStorage.getItem("user") === null){
        navigate('/login-admin')
    }
    else if(user.roles.some(role => role.name === 'MANAGER')){
      
    }else{
        navigate('/error')
    }
}, [])
  return (
    <div className='flex w-full h-screen overflow-y-hidden bg-white'>
      <SidebarWithLogo setCurrentPage={setCurrentPage} handleLogout={handleLogout} />
      <div className='w-full'> 
        <div>
          <NavBar currentPage={currentPage} handleLogout={handleLogout}/>
        </div>
        <div>
          <Routes>
            <Route path='dashboard' element={<PowerBi />} />
            <Route path='pizzas' element={<TablePizza/>} />
            <Route path='foods' element={<TableFood/>}/>
            <Route path='combos' element={<TableCombo/>}/>
            <Route path='pizza/:pizza_type_id' element={<AddPizza/>}/>
            <Route path='food/:food_id' element={<AddFood/>}/>
            <Route path='/report' element={<ReportGenerator/>}/>
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
