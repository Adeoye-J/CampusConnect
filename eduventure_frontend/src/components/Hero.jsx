import React from 'react'
import pic1 from "/home/lodge12.jpg"
import pic2 from "/home/lodge13.jpg"

const Hero = () => {
    return (
        <div className='m-4 border border-primary bg-primary rounded-lg px-12 py-12 text-white flex'>
            <div className="flex-1 flex flex-col items-center gap-5 justify-center">
                <div className="flex flex-col gap-5 items-end">
                    <h1 className='text-7xl font-bold flex flex-col items-end'>Unleash Your <span className='text-tertiary'>Campus Potential</span></h1>
                    <button className='border border-white px-10 py-2 rounded-full font-semibold hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Join Us</button>
                </div>

                <div className="flex gap-4">
                    <p className='py-2 px-10 bg-accent/10 rounded-full font-bold'>Innovate Now</p>
                    <p className='py-2 px-10 bg-accent/10 rounded-full font-bold'>Connect & Collaborate</p>
                </div>

                <p>A vibrant platform for students to showcase talents and services.</p>
            </div>
            <div className="relative">
                <img src={pic2} alt="" className='relative top-36 right-20 -rotate-6 border rounded-lg w-96'/>
                <img src={pic1} alt="" className='relative bottom-52 rotate-12 border rounded-lg w-96' />
            </div>
        </div>
    )
}

export default Hero