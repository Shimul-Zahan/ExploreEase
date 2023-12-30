import React from 'react'
import image1 from '../../../assets/special-offer/h5-img-1.jpg'
import image2 from '../../../assets/special-offer/h5-img-2 (1).jpg'
import image3 from '../../../assets/special-offer/h5-img-3.jpg'

const SpecialOffer = () => {
    return (
        <div className='px-4 py-20 md:px-10'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-blue-400'>Special Offers</h1>
                <button className='px-5 py-2 bg-gray-100'>All Destinations</button>
            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className='relative group overflow-hidden'>
                    <img src={image1} alt="" className='h-[600px] w-full' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Tajmahal Agra</h1>
                        <h1 className='italic text-xl font-bold'>India</h1>
                    </div>
                    <div className='text-white text-center absolute -bottom-20 left-1/2 translate-x-[-50%] group-hover:bottom-20 duration-700 space-y-2'>
                        <button className='bg-black px-10 py-2'>Go Now</button>
                    </div>
                    <div className='text-white text-center absolute -top-20 left-1/2 translate-x-[-50%] group-hover:top-20 duration-700 space-y-2'>
                        <p className='text-4xl'>25% Discount</p>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src={image2} alt="" className='h-[600px] w-full' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Tajmahal Agra</h1>
                        <h1 className='italic text-xl font-bold'>India</h1>
                    </div>
                    <div className='text-white text-center absolute -bottom-20 left-1/2 translate-x-[-50%] group-hover:bottom-20 duration-700 space-y-2'>
                        <button className='bg-black px-10 py-2'>Go Now</button>
                    </div>
                    <div className='text-white text-center absolute -top-20 left-1/2 translate-x-[-50%] group-hover:top-20 duration-700 space-y-2'>
                        <p className='text-4xl'>35% Discount</p>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src={image3} alt="" className='h-[600px] w-full' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Tajmahal Agra</h1>
                        <h1 className='italic text-xl font-bold'>India</h1>
                    </div>
                    <div className='text-white text-center absolute -bottom-20 left-1/2 translate-x-[-50%] group-hover:bottom-20 duration-700 space-y-2'>
                        <button className='bg-black px-10 py-2'>Go Now</button>
                    </div>
                    <div className='text-white text-center absolute -top-20 left-1/2 translate-x-[-50%] group-hover:top-20 duration-700 space-y-2'>
                        <p className='text-4xl'>35% Discount</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer