import React from 'react'
import Navbabr from '../Home/Components/Navbabr'
import Banner from '../../Utils/Banner'

const TopDestination = () => {
    return (
        <div>
            <div className='fixed w-full'>
                <Navbabr />
            </div>
            <Banner />
        </div>
    )
}

export default TopDestination