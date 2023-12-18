import React from 'react'
import image1 from '../../../assets/banner-slider/hero-right.jpg'

const Hero = () => {
    return (
        <div className='px-4 md:px-10 py-10 min-h-screen flex justify-center items-center'>
            <div className="grid grid-cols-1 gap-4 justify-between lg:grid-cols-2 lg:gap-10 relative">
                <div className="space-y-8">
                    <p className='bg-gray-100 text-[#41ddb8] rounded-full text-lg px-5 py-2 w-[30%]'>Book With Us!</p>
                    <h1 className='text-7xl line-clamp-3 font-bold space-y-3'>Find Next Place <br />To Visit</h1>
                    <p className='text-lg font-medium text-gray-500'>Discover amzaing places at exclusive deals. <br />
                        Eat, Shop, Visit interesting places around the world.</p>
                    <p className='bg-gray-100 text-[#f68349] rounded-full text-lg px-5 py-2 w-[33%]'>Book A Trip Now!</p>
                    <div className='h-32 w-[800px] bg-gray-200 z-10 items-center absolute bottom-20 rounded-2xl grid grid-cols-4'>
                        <h1 className='h-full w-full flex justify-center items-center'>Destination</h1>
                        <h1 className='h-full w-full flex justify-center items-center'>Duration</h1>
                        <h1 className='h-full w-full flex justify-center items-center'>Date</h1>
                        <h1 className='bg-red-500 h-full w-full flex justify-center items-center rounded-r-xl'>Tour search here...</h1>
                    </div>
                </div>
                <div className="">
                    <img src={image1} alt="" className='max-h-screen rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero