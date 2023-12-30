import React from 'react'
import NewAddedSlider from '../../../Utils/newAddedSlider'

const FreshlyAddedPackage = () => {
    return (
        <div>
            <div className='px-4 py-10 md:px-10'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-blue-400'>Freshly Added Package</h1>
                    <button className='px-5 py-2 bg-gray-100'>All Destinations</button>
                </div>
                <div>
                    <NewAddedSlider />
                </div>
            </div>
        </div>
    )
}

export default FreshlyAddedPackage