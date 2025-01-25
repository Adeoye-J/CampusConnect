import React from 'react'
import pic from "/home/lodge12.jpg"

const Benefits = () => {

    const features = [
        {
            section: "User Profiles",
            title: "Showcase Yourself",
            content: "Create a killer profile that highlights your skills and services. Stand out and get noticed!",
            image: pic
        },
        {
            section: "Service Listings",
            title: "List Your Services",
            content: "Add your services with catchy titles and descriptions. Make it irresistible for seekers!",
            image: pic
        },
        {
            section: "Messaging",
            title: "Chat Instantly",
            content: "Connect directly with service seekers. No more awkward emails or missed opportunities!",
            image: pic
        }
    ]

    return (
        <div className='bg-primary px-5 sm:px-3 md:px-12 py-12 lg:px-32 lg:py-24 sm:m-4 sm:rounded-lg max-sm:mt-1'>
            <span className='max-sm:text-xs px-4 md:px-6 py-2 border border-white rounded-full text-white'>Key Features</span>
            <h2 className='text-center mb-5 md:mb-10 text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-medium text-white mt-4'>Why Choose Us?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    features.map((item, index) => (
                        <div key={index} className="group">
                            <div className="relative -bottom-6 transition-all duration-500 z-10">
                                <p className='p-2 md:p-3 px-4 rounded-t-2xl bg-tertiary font-medium text-sm md:text-lg w-2/3 text-white text-nowrap'>{item.section}</p>
                                <div className="p-3 rounded-tr-2xl bg-white" />
                            </div>
                            <div className="border rounded-2xl bg-white px-5 md:px-10 py-4 md:py-8 min-h-[300px] flex flex-col gap-3 justify-between items-start">
                                <div className="font-medium flex flex-col items-start gap-3">
                                    <h3 className='text-lg md:text-2xl'>{item.title}</h3>
                                    <p className='text-sm text-[#333]'>{item.content}</p>
                                </div>
                                <button className='text-xs px-3 md:px-6 py-2 border rounded-full border-tertiary hover:text-tertiary hover:scale-105 transition-all duration-300'>Learn More</button>
                                <div className="w-full rounded-xl overflow-hidden">
                                    <img src={item.image} alt="Features Image" className='rounded-xl group-hover:scale-105 transition-all duration-300' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Benefits