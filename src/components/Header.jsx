import React from 'react'
import logo from '../assets/onelabfashion.png'
import { AppContext } from '../Context/GLobalContext';
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from 'react';

export default function Header() {
    const {setTheme, theme } = useContext(AppContext);

  return (
    <div className='hero'>

        <div className="nav flex  justify-between w-4/5 m-auto overflow-x-hidden  ">

           <div className="text-xl font-semibold flex items-center">
                       <img src={logo} alt=""  className='w-10' /> <h2>onelab</h2>
                       </div>

            <ul className='flex gap-4 mt-3 font-bold capitalize'>
                <li>{
                    theme == 'dark'?
                    <MdLightMode onClick={()=>setTheme('light')}/>:
                    <MdDarkMode onClick={()=>setTheme('dark')}/>
                    }</li>
                <li><Link>history</Link></li>
                <li><Link>measurements</Link></li>
            </ul>
        </div>

        <div className="mt-5">
            <h1 className="text-center font-bold">
                style native with onelab
            </h1>
        </div>
    </div>
  )
}
