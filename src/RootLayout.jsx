import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Outlet } from "react-router";
import Footer from './Components/Footer';

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default RootLayout
