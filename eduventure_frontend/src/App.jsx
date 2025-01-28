import { useContext, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import { AppContext } from './context/AppContext'
import TopNav from './components/dashboard/TopNav'
import Dashboard from './pages/Dashboard'

function App() {

    const {token} = useContext(AppContext)

  return (
    <div className='App'>
        <ToastContainer />
        {/* { */}
            {/* // token ?

            // <>
            //     <TopNav />
            //     <Routes>
            //         <Route path='/dashboard' element={<Dashboard />} />
            //     </Routes>
            // </>

            // : 

            // <> */}
                {token ? <TopNav /> : <Navbar />}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/features' element={<Home />} />
                    <Route path='/contact-us' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            {/* // </> */}
        {/* } */}
    </div>
  )
}

export default App
