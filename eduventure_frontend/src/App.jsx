import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className='App'>
        <ToastContainer />
        <Navbar />
        <Hero />
    </div>
  )
}

export default App
