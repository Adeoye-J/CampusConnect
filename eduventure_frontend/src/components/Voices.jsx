import { comment } from 'postcss'
import React from 'react'

const Voices = () => {


    const voices = [
        {
            name: "Alex R.",
            comment: "CampusConnect helped me find a tutor in minutes!"
        },
        {
            name: "Jordan T.",
            comment: "The messaging feature made collaboration a breeze!"
        },
        {
            name: "Liam J.",
            comment: "Finding services on campus has never been easier!"
        },
        {
            name: "Maya L.",
            comment: "I launched my graphic design service and got clients fast!"
        },
        {
            name: "Sam K.",
            comment: "I love the dashboard! It keeps everything organized!"
        },
        {
            name: "Emma W.",
            comment: "I booked a photographer for my event in seconds!"
        }
    ]

    return (
        <div className='bg-primary px-32 py-24 m-4 rounded-lg'>
            <span className='px-6 py-2 border border-white rounded-full text-white'>What They Say</span>
            <h2 className='text-center mb-14 text-6xl font-medium text-white'>Student Voices</h2>
            <div className="grid grid-cols-3 gap-12">
                {
                    voices.map((item, index) => (
                        <div key={index} className="text-white flex flex-col items-start gap-5 p-8 rounded-xl bg-blue-600 shadow-lg text-lg">
                            <h3>{item.comment}</h3>
                            <p className='font-bold'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Voices