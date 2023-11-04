import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Buyer from '../pages/Buyer';
import Seller from '../pages/Seller';
import Courier from '../pages/Courier';
import LoginCourier from '../pages/LoginCourier';
import SignUpBuyer from '../pages/SignUpBuyer';
import SignUpSeller from '../pages/SignUpSeller';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/buyer' element={<Buyer/>}/>
        <Route path='/buyer/signup' element={<SignUpBuyer/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/seller/signup' element={<SignUpSeller/>}/>
        <Route path='/courier' element={<Courier/>}/>
        <Route path='/courier/login' element={<LoginCourier/>}/>
    </Routes>
  )
}

export default Routers