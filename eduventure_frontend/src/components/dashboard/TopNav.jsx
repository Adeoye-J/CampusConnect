import React, { useContext } from 'react'
import student_connect_main from '/student_connect_main.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import profile_placeholder from '/profile_placeholder.png'
import dropdown_icon from '/down-arrow.png'

const TopNav = () => {

    const { setToken } = useContext(AppContext)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
        window.location.reload()
    }

    return (
        <div className='flex items-center justify-between bg-primary px-3 sm:px-12 py-4 text-sm'>
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
                <NavLink to='/dashboard' className={"hover:scale-105 transition-all duration-300"}>
                    <li className='p-2 text-white'>DASHBOARD</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-3/5 m-auto hidden' />
                </NavLink>
                <div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className='w-8 rounded-full' src={profile_placeholder} alt="Profile Pics" />
                    <img className='w-2.5' src={dropdown_icon} alt='dropdown icon' />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                            <p className='hover:text-black cursor-pointer'>My Profile</p>
                            <p className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default TopNav