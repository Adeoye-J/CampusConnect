import React from 'react'

const Plan = () => {

    const plans = [
        {
            name: "Basic",
            feature: "Free",
            cost: 0,
            details: [
                "Get started without spending a dime!",
                "User Profiles",
                "Service Listings",
                "Basic Search"
            ]
        },
        {
            name: "Pro",
            feature: "Premium",
            cost: 10,
            details: [
                "Unlock advanced features for a small fee!",
                "Advanced Search",
                "Messaging System",
                "Booking Options"
            ]
        },
        {
            name: "Ultimate",
            feature: "Elite",
            cost: 25,
            details: [
                "Get the full experience and dominate the platform!",
                "All Features",
                "Payment Integration",
                "Priority Support"
            ]
        }
    ]

    return (
        <div className='bg-primary px-12 sm:px-3 md:px-12 py-12 lg:px-28 lg:py-24 sm:m-4 sm:rounded-lg'>
            <span className='px-6 py-2 border border-white rounded-full text-white'>Pricing</span>
            <h2 className='text-center mb-14 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-medium text-white mt-4'>Choose Your Perfect Plan</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {
                    plans.map((item, index) => (
                        <div key={index} className="group">
                            <div className="relative -bottom-6 transition-all duration-500 z-10">
                                <p className='p-3 px-4 rounded-t-2xl bg-tertiary font-medium text-lg w-2/3 text-white'>{item.name}</p>
                                <div className="p-3 rounded-tr-2xl bg-white" />
                            </div>
                            <div className="border rounded-2xl bg-white px-10 py-8 min-h-[500px] flex flex-col gap-7 justify-between items-start">
                                <h4 className='text-3xl font-bold'>${item.cost}</h4>
                                <h3 className='text-4xl font-normal'>{item.feature}</h3>
                                <div className="flex flex-col">
                                    {item.details.map((item, index) => (
                                        <div className="">
                                            <p key={index} className='text-xl py-6 font-medium text-[#333]'>{item}</p>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                                <button className='px-6 py-2 border border-tertiary rounded-full font-semibold hover:text-tertiary transition-all duration-300 hover:scale-105'>Join Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Plan