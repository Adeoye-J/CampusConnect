import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home'

function App() {

  return (
    <div className='App'>
        <ToastContainer />
        <Home />
    </div>
  )
}

export default App
