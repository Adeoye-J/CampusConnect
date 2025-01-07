import React from 'react'
import section1 from "/home/lodge12.jpg"

const Section1 = () => {
    return (
        <div className='flex px-12 py-32 m-4'>
            <div className="flex-1 flex items-center justify-center">
                <img src={section1} alt="" className='w-96 rounded-xl' />
            </div>
            <div className="flex-1 flex flex-col gap-7 items-start justify-center">
                <h2 className='text-7xl font-semibold'>Empower Your <span className='text-tertiary'>Campus Experience</span></h2>
                <p className='text-gray-700 text-lg font-semibold'>Discover, connect, and thrive with fellow students!</p>
                <button className='border border-black px-10 py-2 rounded-full font-semibold hover:border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-500'>Explore More</button>
            </div>
        </div>
    )
}

export default Section1