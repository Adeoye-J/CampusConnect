import React from 'react'
import section1 from "/home/lodge12.jpg"

const Section1 = () => {
    return (
        <div className='flex flex-col lg:flex-row px-3 sm:px-12 py-12 md:py-32 m-4 gap-10'>
            <div className="w-full lg:w-2/5 flex items-center justify-center">
                <img src={section1} alt="" className='rounded-xl' />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-3 md:gap-7 items-center lg:items-start justify-center">
                <h1 className='text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-semibold'>Empower Your</h1>
                <h1 className='text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-semibold text-tertiary text-center'>Campus Experience</h1>
                <p className='text-gray-700 text-lg font-semibold text-center'>Discover, connect, and thrive with fellow students!</p>
                <button className='border border-black px-4 md:px-10 py-2 rounded-full font-semibold hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Explore More</button>
            </div>
        </div>
    )
}

export default Section1