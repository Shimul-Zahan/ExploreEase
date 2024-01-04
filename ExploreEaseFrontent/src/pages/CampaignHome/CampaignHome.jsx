import React from 'react'
import Navbabr from '../Home/Components/Navbabr'

const CampaignHome = () => {
    return (
        <div>
            <Navbabr />
            <div className='relative mb-5 lg:mb-20'>
                <img src="https://img.freepik.com/free-photo/beautiful-shot-top-mountain_181624-21611.jpg?w=1060&t=st=1704392696~exp=1704393296~hmac=a6827e9b8ade25393c638d4089211208402ef6b50cb96624d1fa10b686eae42d" alt="" className='w-full lg:h-[500px]' />
                <h1 className='text-4xl text-white font-bold flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%]'>Campaign Home || Slider hobe ekhane</h1>
            </div>
        </div>
    )
}

export default CampaignHome