import React from 'react'

const CategoriesCards = ({imgSrc,categoryName}) => {
  return (
    <div>
      <div>
        <div className="px-14.25 py-6.25 text-black text-center">
          <img src={imgSrc} alt="" className='block mx-auto'/>
          <h3 className='font-medium mt-4'>{categoryName}</h3>
        </div>
      </div>
    </div>
  )
}

export default CategoriesCards
