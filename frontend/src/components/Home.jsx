import React from 'react'
import Hero from './Hero'
import Statistics from './Statistics'
import Reviews from './Reviews'
import Partners from './Partners'

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Statistics /> */}
            <Partners/>
            <Reviews/>
        </>
    );
}

export default Home