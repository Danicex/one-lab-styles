import { useState } from 'react'
import './App.css'
import { AppContext, AppProvider } from './Context/GLobalContext'
import LandingPage from './LandingPage'
import UserDetails from './components/UserDetails'
import ProductSlides from './components/ProductSlides'
import MainPage from './components/MainPage'
import { Route,Routes } from 'react-router-dom'
import './components/Allstyles.css'

function App() {
 

  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/user_form' element={<UserDetails/>}/>
        <Route path='/store' element={<MainPage/>}/>
        <Route path='/slides' element={<ProductSlides/>}/>
      </Routes>
    </AppProvider>
  )
}

export default App
