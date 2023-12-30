import React from 'react'

const Packages = () => {
    return (
        <div className='p-4 lg:p-10 lg:pt-20'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 items-center lg:gap-8">
                <div className="lg:col-span-2 block lg:hidden">
                    <div className='text-center space-y-4'>
                        <h1 className='text-4xl font-bold text-blue-400'>PACKAGES FOR YOU</h1>
                        <p>Explore our top destinations voted by more than 100,000+ <br /> customers around the world.</p>
                        <button className='px-5 py-2 bg-gray-100'>All Destinations</button>
                    </div>
                </div>
                <div className="lg:space-y-8 flex justify-center items-center gap-5 lg:block">
                    <div>
                        <img src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=sph" alt="" className='lg:rounded-tr-[40%]' />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=sph" alt="" className='lg:rounded-bl-[40%]' />
                    </div>
                </div>
                <div className="lg:col-span-2 hidden lg:block">
                    <div className='text-center space-y-4'>
                        <h1 className='text-2xl font-bold text-blue-400'>It's time to travel</h1>
                        <h1 className='text-4xl font-bold text-blue-400'>Get your Next Destination</h1>
                        <h1 className='text-2xl font-bold text-blue-400'>Travel Package</h1>
                        <div className='flex justify-center items-center gap-10'>
                            <button className='px-5 py-2 bg-gray-100'>See More</button>
                            <button className='px-5 py-2 bg-gray-100'>Book Now</button>
                        </div>
                        <h1 className='text-4xl bg-red-500 py-5 px-10 w-[35%] mx-auto rounded-full font-bold text-blue-400'>50% OFF</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi mollitia ea magni eos officiis asperiores fuga! Repudiandae rem voluptates, esse voluptas quasi nobis laboriosam dolorem. Sint iusto ipsam eius ex?</p>
                    </div>
                </div>
                <div className="lg:space-y-8 flex justify-center items-center gap-5 lg:block">
                    <div>
                        <img src="https://img.freepik.com/premium-photo/beach-goa-india_78361-4735.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=sph" alt="" className='lg:rounded-tr-[40%]' />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand_335224-1063.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=sph" alt="" className='lg:rounded-bl-[40%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages