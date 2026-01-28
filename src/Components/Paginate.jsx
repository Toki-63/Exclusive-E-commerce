import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import { useSelector } from 'react-redux'




function Items({ currentItems }) {
    return (
        <>
      {currentItems &&
        currentItems.map((item,idx) => (
            <Card
            key={idx}
            id={item.id}
            ImgSrc={item.thumbnail}
            title={item.title}
            price={Math.round(item.price-(item.price * item.discountPercentage)/100)}
            discount={item.price}
            review={item.reviews.length}
            percentage={item.discountPercentage}
            rating={item.rating}
            />
        ))}
    </>
  );
}    
const Paginate = ({ itemsPerPage}) => {
  
  const AllProducts = useSelector((state) => state.AllProducts.value)
  const items = AllProducts;
    
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='absolute -bottom-20 left-0 flex gap-4'
        pageClassName='bg-black text-white px-6 py-[2px] cursor-pointer'
      />
    </>
  )
}

export default Paginate
