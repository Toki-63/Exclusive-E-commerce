import React from 'react'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSales'
import Categories from '../Components/Categories'
import ThisMonth from '../Components/ThisMonth'
import JBL from '../Components/JBL'
import OurProducts from '../Components/OurProducts'
import Featured from '../Components/Featured'
import Services from '../Components/Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <ThisMonth/>
      <JBL/>
      <OurProducts/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home
