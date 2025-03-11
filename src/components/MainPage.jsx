import React, { useContext, useState } from 'react'
import UserDetails from './UserDetails'
import { AppContext } from '../Context/GLobalContext';
import ProductSlides from './ProductSlides';
import Header from './Header';
import { CiGrid32 } from "react-icons/ci";
import { PiSlideshow } from "react-icons/pi";
import Grid from './Grid';
import Summary from './Summary';

export default function MainPage() {
  const {user, } = useContext(AppContext);
  const [grid, setGrid] = useState(false)
  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const data =  {
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPJNHUxa9woy4bn0lHO2ptpuHNEAD3LmPeA&s', 
    product_price: 50, 
    product_name: 'big bag',
  }
  const  [openCheckout, setOpenCheckout] = useState(false);

  const checkout = ()=>{
    if(user ===  null){
      setActive1(true)
    }else{
      setActive(true)
    }
  }

  const closeActive = ()=>{
    setActive(false)
    setActive1(false)
  }

  return (
    <div   className=''>
      <Header/>
      
    <div className='w-4/5 m-auto overflow-x-hidden mt-10'>
    {grid ? (
               <div className='grid-btn' onClick={()=>setGrid(false)}>
               <PiSlideshow size={25}/> <h2>Slides</h2>
             </div>
        ):(

          <div className='grid-btn' onClick={()=>setGrid(true)}>
            <CiGrid32 size={25}/> <h2>Grid</h2>
          </div>
        )}
        
{grid 
    ? 
    <Grid /> 
    : 
    <ProductSlides />
}
    <div>
    {
      active1 && (
        <UserDetails product_image={data.product_image} product_price={data.product_price} product_name={data.product_name} setActive1={setActive1}/>
      )
    }{
      active && (
        <Summary/>
      )
    }
    </div>

    </div>
    </div>
  )
}
