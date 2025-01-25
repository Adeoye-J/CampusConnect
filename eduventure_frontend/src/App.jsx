import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'

function App() {

  return (
    <div className='App'>
        <ToastContainer />
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Home />} />
            <Route path='/contact-us' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default App
