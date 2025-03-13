import React, { useContext, useState } from 'react'
import PaymentBtn from './Checkout'
import { AppContext } from '../Context/GLobalContext'

export default function Summary({name, price, image,  description, setActive1}) {
    const {user} = useContext(AppContext);
    const [selectedColor, setSelectedColor] = useState("black");
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center "  id='trans-bg2'>

      <div className="relative w-full max-w-2xl rounded-lg  p-6 shadow-lg" id='trans-bg'>
        <button onClick={()=>setActive1(false)} className="absolute right-4 top-4  hover:text-gray-300">
✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square">
              <img
                src={image }
                alt={name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-medium">{name}</h3>
              <p className="text-lg font-bold">{price}</p>
            </div>

            <PaymentBtn amount={price} name={name} email={user} phone={user}/>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg mb-2">Description</h4>
              <p className="text-gray-300">{description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg">Select fabric color</h4>
              <div className="flex gap-3">
                {["black", "white", "gray"].map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={color}
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      className="hidden"
                    />
                    <label
                      htmlFor={color}
                      className={`cursor-pointer px-4 py-2 rounded-md border ${
                        selectedColor === color ? "border-white" : "border-gray-500"
                      } text-sm`}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
