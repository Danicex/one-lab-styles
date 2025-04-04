import { useState } from 'react'
import './App.css'
import { AppContext, AppProvider } from './Context/GLobalContext'
import LandingPage from './LandingPage'
import UserDetails from './components/UserDetails'
import ProductSlides from './components/ProductSlides'
import MainPage from './components/MainPage'
import { Route,Routes } from 'react-router-dom'
import './components/Allstyles.css'
import Measurment from './components/Measurment'
import History from './components/History';
import MainStore from './components/MainStore'

function App() {
 

  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/user_form' element={<UserDetails/>}/>
        <Route path='/store-main' element={<MainPage/>}/>
        <Route path='/store' element={<MainStore/>}/>
        <Route path='/slides' element={<ProductSlides/>}/>
        <Route path='/measurement' element={<Measurment/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </AppProvider>
  )
}

export default App
