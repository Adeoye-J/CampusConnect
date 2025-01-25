import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home'

function App() {

  return (
    <div className='App'>
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Home />} />
            <Route path='/contact-us' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
