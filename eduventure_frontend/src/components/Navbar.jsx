import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import student_connect_main from '/student_connect_main.png'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-primary px-12 py-4 m-4 rounded-full flex items-center justify-between text-sm">
            <img onClick={() => navigate("/")} src={student_connect_main} alt="" className='w-64 cursor-pointer' />
            <ul className="hidden md:flex items-start gap-5 font-bold text-base">
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
                <button className='border border-white rounded-full py-2 px-10 text-base font-semibold text-white hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar