import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Client/Home';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import SignUp from './pages/Client/SignUp';
import store from './redux/store';
import { Provider } from 'react-redux'; 
import Order from './pages/Client/Order';
import { ToastContainer } from 'react-toastify';
import Payment from './pages/Client/Payment';
import ThankYou from './pages/Client/ThankYou';
import Tracking from './pages/Client/Tracking';
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Admin/Login';
import OrderStaff from './pages/Staff/OrderStaff';
import ListOrder from './pages/Staff/ListOrder';
import Error from './pages/Error';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/payment' element={<Payment/>} />
            <Route path='/thank-you/:order_id' element={<ThankYou/>}/>
            <Route path='/tracking' element={<Tracking/>}/>
            <Route path='/admin/*' element={<Dashboard/>}/>
            <Route path='/login-admin' element={<Login/>} />
            <Route path= '/staff/order' element={<OrderStaff/>}/>
            <Route path='/staff/list-order' element={<ListOrder/>}/>
            <Route path='/error' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals