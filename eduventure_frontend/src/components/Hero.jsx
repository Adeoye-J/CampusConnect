import React from 'react'
import pic1 from "/home/campus_connect.png"

const Hero = () => {
    return (
        <div className='sm:m-4 border border-primary bg-primary sm:rounded-lg px-3 md:px-12 py-12 text-white flex'>
            <div className="w-full lg:w-3/5 flex flex-col items-center gap-5 justify-center">
                <div className="flex flex-col gap-5 sm:items-end ">  
                    {/* <h1 className='text-5xl md:text-7xl font-bold flex flex-col items-center text-center sm:items-end'>Unleash Your <span className='text-tertiary inline-block'>Campus Potential</span></h1> */}
                    <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold text-center sm:text-right'>Unleash Your</h1>
                    <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold text-center sm:text-right text-tertiary'>Campus Potential</h1>
                    <button className='border border-white px-10 py-2 rounded-full font-semibold hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Join Us</button>
                </div>

                <div className="flex gap-4 text-center max-sm:text-sm">
                    <p className='py-2 px-10 bg-accent/10 rounded-full font-bold'>Innovate Now</p>
                    <p className='py-2 px-10 bg-accent/10 rounded-full font-bold'>Connect & Collaborate</p>
                </div>

                <p className='text-center'>A vibrant platform for students to showcase talents and services.</p>
            </div>
            <div className="w-2/5 hidden lg:flex items-center justify-center">
                <img src={pic1} alt="Sample Image to be replaced" />
            </div>
        </div>
    )
}

export default Hero