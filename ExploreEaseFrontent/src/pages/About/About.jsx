import React from 'react'
import Navbabr from '../Home/Components/Navbabr'
import AboutMain from '../../Utils/AboutMain'
import AboutFAQ from './AboutFAQ'
import TeamMember from '../../Utils/TeamMember';

const About = () => {
    return (
        <div>
            <Navbabr />
            <div className='p-4 lg:p-10'>
                <AboutMain />
                <h1 className='text-xl lg:text-3xl font-bold text-center mb-5 lg:mb-20'>FREQUENTLY ASKED QUESTIONS</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
                    <div>
                        <AboutFAQ />
                    </div>
                    <div>
                        <AboutFAQ />
                    </div>
                </div>
                <h1 className='text-xl lg:text-3xl font-bold text-center my-5 lg:my-20'>OUR TEAM</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-10'>
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                </div>
            </div>
        </div>
    )
}

export default About