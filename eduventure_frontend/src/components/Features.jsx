import React from 'react'

const Features = () => {

    const features = [
        {
            feature: "Dynamic User Profiles",
            content: "Craft your unique identity! Showcase your skills, services, and products to connect with fellow students who need your expertise. It's like Tinder, but for services!"
        },
        {
            feature: "Service Listings Galore",
            content: "List your services with flair! Categorize, price, and describe your offerings to attract the right crowd. Make your services irresistible!"
        },
        {
            feature: "Search Like a Pro",
            content: "Find what you need in a snap! Use our powerful search and filters to discover services by category, price, location, and ratings. No more endless scrolling!"
        },
        {
            feature: "Book & Review Easily",
            content: "Book services with a click! Enjoy seamless booking options, contact features, and a review system to keep everyone honest. Trust is key, folks!"
        }
    ]

    return (
        <div className='px-12 sm:px-3 md:px-12 py-12 lg:px-32 lg:py-24 sm:m-4 rounded-lg text-black'>
            <span className='px-6 py-2 border border-black rounded-full'>Key Features</span>
            <h2 className='text-center mb-14 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-medium mt-4'>Why You’ll Love This Platform</h2>
            <hr className='h-0.5 bg-gray-200' />
            
            <div className="">
                {
                    features.map((item, index) => (
                        <div className="">
                            <div className="flex justify-between gap-4 py-10 px-5 flex-col md:flex-row">
                                <h3 className='flex-1 font-normal text-3xl'>{item.feature}</h3>
                                <p className='flex-1 text-xl'>{item.content}</p>
                            </div>
                            <hr className='h-0.5 bg-gray-200 block' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features