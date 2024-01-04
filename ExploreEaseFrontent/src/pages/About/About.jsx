import React from 'react'
import Navbabr from '../Home/Components/Navbabr'
import AboutMain from '../../Utils/AboutMain'

const About = () => {
    return (
        <div>
            <Navbabr />
            <div className='p-4 lg:p-10'>
                <AboutMain />
            </div>
        </div>
    )
}

export default About