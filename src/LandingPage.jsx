import React, { useContext, useState } from 'react'
import { AppContext } from './Context/GLobalContext'
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import {Link} from 'react-router-dom'
import image from './assets/one-lab-landing-image.webp'
import  logo from './assets/onelabfashion.png'
import globe from './assets/onelab globe.png'
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

export default function LandingPage() {
    const {theme, setTheme} = useContext(AppContext);
    const  [nav, setNav] = useState(false)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="w-full px-6 pt-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center">
            <img src={logo} alt=""  className='w-10' /> <h2>onelab</h2>
            </div>
          <nav className="hidden space-x-6 md:flex">
           
            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white">
              <FaInstagram size={20}/>
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white">
            <FaTiktok size={20}/>
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white">
            <MdOutlineMail size={20}/>
            </Link>
          </nav>
          <button variant="outline" className="hidden md:inline-flex">
            Contact Us
          </button>
          <button variant="ghost" size="icon" className="md:hidden" onClick={()=>setNav(!nav)}>
            
          </button>
        </div>
      </header>

      {/* Three Column Section */}
      <section className="container mx-auto  md:py-20 max-md:px-4 py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {/* Hero Text Column */}
          <div className="flex flex-col justify-center space-y-6 mt-6">
            <h1 className="text-4xl  font-bold tracking-tight md:text-5xl">Bespoke <span className='span-txt'>Nigerian Menswear</span>, Crafted Just for You</h1>
            <p className="text-lg text-muted-foreground">
            Choose your style, fabric, and measurements—all from home. We’ll craft your outfit with precision in just one week.
            </p>
            <p className='font-bold'>Let’s create something exceptional. Contact me today!</p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <button size="lg"><Link to={'/store'}>Order now</Link></button>
            </div>
          </div>

          {/* img Column */}
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg md:h-[500px]">
              <img
                src={image}
                alt="Product showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Extra Text Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold">Steps to take</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className='capitalize'>select a style</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className='capitalize'>input your measurements</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className='capitalize'>select a fabric and color</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className='capitalize'>make payment (fast and easy)</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className='capitalize text-green-400'>recieve your item in 2 weeks time</span>
              </li>

            </ul>
            <div>
            <img src={globe} alt="" className='globe-img'/>
            <p className='capitalize'>we delever to the US, UK and any where in Africa</p>
            </div>
          </div>

        </div>
      </section>
      {nav &&(
        <div id='trans-bg' className='p-5 absolute top-[10%] right-0 w-80 rounded-md flex flex-col lg:hidden md:hidden'>
            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white flex gap-2 items-center">
            <p>Instagram</p>
              <FaInstagram size={20}/>
            </Link>

            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white flex gap-2 items-center">
            <p>Tiktok</p>
            <FaTiktok size={20}/>
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground  text-white flex gap-2 items-center">
            <p>Email</p>
            <MdOutlineMail size={20}/>
            </Link>
        </div>
      )}

    </main>
  )
}
