import React from 'react'
import {Link} from 'react-router-dom'
import imgage1 from '../../../assets/popular-destination/cat-america.jpg'
import imgage2 from '../../../assets/popular-destination/cat-asia.jpg'
import imgage3 from '../../../assets/popular-destination/cat-egypt.jpg'
import imgage4 from '../../../assets/popular-destination/cat-eu-1.jpg'
import imgage5 from '../../../assets/popular-destination/cat-scan.jpg'
import imgage6 from '../../../assets/popular-destination/cat-soft-africa.jpg'

const TopDestination = () => {
    return (
        <div className='px-4 py-20 md:px-10'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-blue-400'>Top Destinations</h1>
                <p>Explore our top destinations voted by more than 100,000+ <br /> customers around the world.</p>
                <button className='px-5 py-2 bg-gray-100'>All Destinations</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-10 justify-center items-center relative'>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage1} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <Link to='/top-destination'>
                            <button className='text-blue-400'> View all destination</button>
                        </Link>
                    </div>
                </div>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage2} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <button className='text-blue-400'> View all destination</button>
                    </div>
                </div>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage3} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <button className='text-blue-400'> View all destination</button>
                    </div>
                </div>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage4} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <button className='text-blue-400'> View all destination</button>
                    </div>
                </div>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage5} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <button className='text-blue-400'> View all destination</button>
                    </div>
                </div>
                <div className='relative group overflow-y-hidden'>
                    <img src={imgage6} alt="" className='rounded-lg' />
                    <h1 className='text-2xl font-bold text-white absolute bottom-5 left-1/2 translate-x-[-50%] group-hover:bottom-1/2 duration-700'> South Asia </h1>
                    <div className='text-center text-white space-y-3 absolute -bottom-1/2 group-hover:bottom-10 left-1/2 translate-x-[-50%] duration-700'>
                        <h1>Far far away, behind the word mountains,far from the countries</h1>
                        <button className='text-blue-400'> View all destination</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestination