import React from 'react';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Routers from '../../router/Routers';

const Layout = () => {
  return (
    <>
    <Header/>
    <Routers/>
    <Footer/>
    </>
  )
}

export default Layout