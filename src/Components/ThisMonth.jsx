import React from 'react'
import SecHeading from './SecHeading'
import Btn from './Btn'
import Card from './Card'
import Jacket from '../assets/Cart.png'
import Cart2 from '../assets/Cart2.png'
import Cart3 from '../assets/Cart3.png'
import Cart4 from '../assets/Cart4.png'
import Card2 from './Card2'

const ThisMonth = () => {
  return (
    <div>
      <div className="container">
        <div className='mb-15 flex justify-between'>
            <SecHeading
               title="This Month"
               heading="Best Selling Products"
            />
            <div className='self-end'>
             <Btn>View All</Btn>
            </div>
        </div>
        <div className='flex justify-between mb-35'>
            <Card2
               ImgSrc={Jacket}
               title="The north coat"
               price="260"
               discount="360"
               review="65"
            />
            <Card2
               ImgSrc={Cart2}
               title="Gucci duffle bag"
               price="960"
               discount="1160"
               review="65"
            />
            <Card2
               ImgSrc={Cart3}
               title="RGB liquid CPU Cooler"
               price="160"
               discount="170"
               review="65"
            />
            <Card2
               ImgSrc={Cart4}
               title="Small BookSelf"
               price="360"
               discount="390"
               review="65"
            />
        </div>
      </div>
    </div>
  )
}

export default ThisMonth
