import React, { useContext, useState } from 'react'
import Summary from './Summary';
import UserDetails from './UserDetails';
import { AppContext } from '../Context/GLobalContext';

export default function Grid() {
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
    { id: 6, name: "Bag", price: "$35", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4-sWOA7WHLEOVtNPcYg9ftRhhITM-5nMORZObSL5HPLM00DniyxfFA2IkV-0WFIjf9aceaJZs__mccWMvfU3cve81Z7uIIELjGRiFBgebnvvpNq9RtZbn&usqp=CAc" },
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {fashionProducts.map((product) => (
          <div key={product.id} className="rounded-lg shadow-lg cursor-pointer" id='trans-bg' onClick={()=>checkout(product.name, product.description, product.image, product.price)}>
            <img src={product.image} alt={product.name} className="product-image w-full h-60 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2 px-3">{product.name}</h3>
            <p className="text-gray-300 px-3 pb-3">{product.price}</p>
          </div>
        ))}
      </div>
      

      {active1 && (
        <Summary name={data.name} description={data.description} image={data.image} price={data.price} setActive1={setActive1} />
      )}
      {
        active && (
          <UserDetails setActive={setActive}/>
        )
      }
    </div>
  )
}
