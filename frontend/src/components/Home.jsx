import React from 'react'
import Hero from './Hero'
import Statistics from './Statistics'
import Reviews from './Reviews'
import Partners from './Partners'
import FAQSection from './FAQSection'

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Statistics /> */}
            <Partners/>
            <Reviews/>
            <FAQSection/>
        </>
    );
}

export default Home