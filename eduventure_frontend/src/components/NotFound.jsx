import React from 'react'
import notfound from "/not_found/notfound.jpeg"

const NotFound = () => {
    return (
        <div className='flex '>
            <div className="">
                <img src={notfound} alt="" />
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            </div>
        </div>
    )
}

export default NotFound