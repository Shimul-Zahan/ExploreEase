import React from 'react'
import Navbabr from './Components/Navbabr'
import Hero from './Components/Hero'
import TopDestination from './Components/TopDestination'
import ExploreTheWorld from './Components/WxploreTheWorld'
import FreshlyAddedPackage from './Components/FreshlyAddedPackage'

const Home = () => {
    return (
        <div>
            <Navbabr />
            <Hero />
            <TopDestination />
            <ExploreTheWorld />
            <FreshlyAddedPackage />
        </div>
    )
}

export default Home