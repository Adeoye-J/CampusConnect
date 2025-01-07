import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Voices from './components/Voices'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Plan from './components/Plan'

function App() {

  return (
    <div className='App'>
        <ToastContainer />
        <Navbar />
        <Hero />
        <Section1 />
        <Voices />
        <Benefits />
        <Features />
        <Plan />
    </div>
  )
}

export default App
