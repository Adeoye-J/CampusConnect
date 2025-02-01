import React, { useContext, useState } from 'react'
import student_connect_main from '/student_connect_main.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import profile_placeholder from '/profile_placeholder.png'
import dropdown_icon from '/down-arrow.png'

const TopNav = () => {

    const { setToken } = useContext(AppContext)

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
        window.location.reload()
    }

    return (
        <div className='flex items-center justify-between bg-primary px-3 sm:px-12 py-4 text-sm'>
            <img onClick={() => navigate("/")} src={student_connect_main} alt="" className='w-40 sm:w-48 lg:w-64 cursor-pointer' />
            <div className="flex">
                <input type="text" className='h-[40px] px-2 w-[30vw] border-none shadow-md rounded-md outline-none' placeholder='Search here...' />
            </div>
            <ul className="hidden md:flex items-center gap-5 font-bold text-sm lg:text-base">
                <NavLink to='/' className={"hover:scale-105 transition-all duration-300"}>
                    <li className='p-2 text-white'>HOME</li>
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
                <div className="flex items-center justify-center gap-2 cursor-pointer relative">
                    <div className="">
                        <p className='text-sm text-white'>John Doe</p>
                        <p className='text-xs text-gray-400'>Admin</p>
                    </div>
                    <div className="relative flex items-center justify-center gap-2 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                        <img className='w-8 rounded-full' src={profile_placeholder} alt="Profile Pics" />
                        <img className='w-2.5 absolute bottom-0 right-0 bg-white rounded-full p-0.5 text-white' src={dropdown_icon} alt='dropdown icon' />
                    </div>
                    <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-white z-20 ${showMenu ? 'block' : 'hidden'}`}>
                        <div className="min-w-48 bg-blue-800 rounded flex flex-col gap-4 p-4">
                            <p className='hover:text-gray-300 cursor-pointer'>My Profile</p>
                            <p onClick={logout} className='hover:text-gray-300 cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default TopNav