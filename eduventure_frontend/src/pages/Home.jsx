import React from 'react'
import Section1 from '../components/Section1'
import Hero from '../components/Hero'
import Voices from '../components/Voices'
import Benefits from '../components/Benefits'
import Features from '../components/Features'

const Home = () => {

    return (
        <div>
            <Hero />
            <Section1 />
            <Voices />
            <Benefits />
            <Features />
        </div>
    )
}

export default Home