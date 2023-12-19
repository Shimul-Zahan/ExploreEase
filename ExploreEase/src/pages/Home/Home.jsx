import React from 'react'
import Navbabr from './Components/Navbabr'
import Hero from './Components/Hero'
import TopDestination from './Components/TopDestination'
import ExploreTheWorld from './Components/WxploreTheWorld'
import FreshlyAddedPackage from './Components/FreshlyAddedPackage'
import MainSlider from './Components/MainSlider'

const Home = () => {
    return (
        <div>
            <Navbabr />
            <Hero />
            <MainSlider />
            <TopDestination />
            <ExploreTheWorld />
            <FreshlyAddedPackage />
        </div>
    )
}

export default Home