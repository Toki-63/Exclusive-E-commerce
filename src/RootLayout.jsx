import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Outlet } from "react-router";
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet />
      <ToastContainer />
      <Footer/>
    </div>
  )
}

export default RootLayout
