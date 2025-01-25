import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

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
        </Routes>
    </div>
  )
}

export default App
