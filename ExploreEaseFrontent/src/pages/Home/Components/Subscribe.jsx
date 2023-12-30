import React from 'react'
import image from '../../../assets/Explore-the-world/h5-tour-f-img-2.jpg'

const Subscribe = () => {
    return (
        <div className='px-4 py-20 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
            <div className='relative'>
                <img src={image} alt="" className='w-full h-[400px] rounded-xl' />
                <div className='space-y-3 absolute top-1/2 translate-y-[-50%] left-10 text-white'>
                    <h1 className='font-bold text-4xl'>Discover Special Deals!</h1>
                    <p className='text-xl'>Make sure to check out these special <br />promotions</p>
                    <button className='px-6 py-2 bg-blue-400'>See Tour</button>
                </div>
            </div>
            <div className='rounded-xl bg-gray-100 relative'>
                <div className='space-y-3 absolute top-1/2 translate-y-[-50%] left-10 text-black'>
                    <h1 className='font-bold text-4xl'>Don’t miss a thing</h1>
                    <p className='text-xl'>Get update to special deals and exclusive <br /> offers. <br />
                        Sign up to our newsletter!</p>
                    <button className='px-6 py-2 bg-blue-400'>See Tour</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe