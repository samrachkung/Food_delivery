import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
const [showlogin,setShowlogin] = useState(false)

  return (
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}

    
      <div className='app'>
      <ToastContainer />
        <Navbar setShowlogin={setShowlogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App