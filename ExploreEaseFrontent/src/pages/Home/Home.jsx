import React from 'react'
import Navbabr from './Components/Navbabr'
import Hero from './Components/Hero'
import TopDestination from './Components/TopDestination'
import ExploreTheWorld from './Components/WxploreTheWorld'
import FreshlyAddedPackage from './Components/FreshlyAddedPackage'
import MainSlider from './Components/MainSlider'
import SpecialOffer from './Components/SpecialOffer'
import Subscribe from './Components/Subscribe'
import Footer from '../Footer/Footer'
import Packages from './Components/Packages'
import TourList from './Components/TourList'

const Home = () => {
    return (
        <div>
            <Navbabr />
            <Hero />
            <MainSlider />
            <TopDestination />
            <Packages />
            <TourList />
            <ExploreTheWorld />
            <FreshlyAddedPackage />
            <SpecialOffer />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home