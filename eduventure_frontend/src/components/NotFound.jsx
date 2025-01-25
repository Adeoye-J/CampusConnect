import React from 'react'
import notfound from "/not_found/notfound.jpeg"

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div className="flex flex-col gap-3 items-center mt-9">
                <img src={notfound} alt="" />
                <h1 className='text-5xl font-bold'>404</h1>
                <h2 className='text-2xl italic'>Page Not Found</h2>
                <p className='text-gray-600 text-xl text-center'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            </div>
        </div>
    )
}

export default NotFound