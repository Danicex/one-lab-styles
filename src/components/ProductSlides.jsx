import React, { useContext, useState } from 'react'
import Summary from './Summary';
import { Navigation, EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'
import UserDetails from './UserDetails';
import { AppContext } from '../Context/GLobalContext';

export default function ProductSlides() {
const {user} = useContext(AppContext)
const   [active, setActive] =useState(false)
const   [active1, setActive1] =useState(false)
  const [data, setData] = useState({
      name: '',
      description: '',
      image: '',
      price: '',
  
  })
  const fashionProducts = [
    { id: 1, name: "T-Shirt", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPJNHUxa9woy4bn0lHO2ptpuHNEAD3LmPeA&s" },
    { id: 2, name: "Jeans", price: "$40", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsfLxNcbVNWEPTeuSZ_-B1aiJjXC6n4QqeQ&s" },
    { id: 3, name: "Jacket", price: "$60", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_qtfYq6XSmTM23Sn1kc3ycbxC7Mjp8AhxA&s" },
    { id: 4, name: "Sneakers", price: "$80", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWWwueERPE5H6e24o0aWWMIktxVxjzxIZAw&s" },
    { id: 5, name: "Hat", price: "$15", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Bag", price: "$35", image: "https://via.placeholder.com/150" },
  ];
  const checkout = (name, description, image, price) => {
    if(user === null){
      setActive(true)
    }else{
      setActive1(true)
    }
    setData({
      name: name,
      description: description,
      image: image,
      price: price,
    })
  }

  return (
   <div>
    <Swiper
      modules={[Navigation, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      navigation
      className="mySwiper"
    >
      {fashionProducts.map((product) => (
        <SwiperSlide key={product.id} >
          <img src={product.image} alt="" className='swiper-slide '  onClick={()=>checkout(product.name, product.description, product.image, product.price)} />
        </SwiperSlide>
      ))}
    </Swiper>

    <div>
     
      {active1 && (
              <Summary name={data.name} description={data.description} image={data.image} price={data.price} setActive1={setActive1} />
       )}

       {active && (
        <UserDetails setActive={setActive}/>
       )}
    </div>
   </div>
  )
}
