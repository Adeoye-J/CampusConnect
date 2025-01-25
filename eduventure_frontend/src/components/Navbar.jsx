import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import student_connect_main from '/student_connect_main.png'

const Navbar = () => {

    const navigate = useNavigate()

    const handleGetStarted = () => {
        toast.success('Get Started')
        navigate('/sign-up')
    }

    return (
        <div className="bg-primary px-3 sm:px-12 py-4 sm:m-4 sm:rounded-full flex items-center justify-between text-sm">
            <img onClick={() => navigate("/")} src={student_connect_main} alt="" className='w-40 sm:w-48 lg:w-64 cursor-pointer' />
            <ul className="hidden md:flex items-start gap-5 font-bold text-sm lg:text-base">
                <NavLink to='/' className={"hover:scale-105 transition-all duration-300"}>
                    <li className='p-2 text-white'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/features' className={"hover:scale-105 transition-all duration-300"}>
                    <li className='p-2 text-white'>FEATURES</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact-us' className={"hover:scale-105 transition-all duration-300"}>
                    <li className='p-2 text-white'>CONTACT US</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className="">
                <button onClick={handleGetStarted} className='border border-white rounded-full py-2 lg:px-10 px-6 text-sm sm:text-base font-semibold text-white hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar