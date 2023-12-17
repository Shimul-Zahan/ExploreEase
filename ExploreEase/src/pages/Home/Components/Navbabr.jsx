import React from 'react'
import { Link } from 'react-router-dom'

const Navbabr = () => {

    const navMenu = [
        {
            menu: 'Home',
            link: '/',
        },
        {
            menu: 'Destination',
            link: '/destination',
        },
        {
            menu: 'Tours',
            link: '/tours',
        },
        {
            menu: 'Blogs',
            link: '/blogs',
        },
        {
            menu: 'Registration',
            link: '/registration',
        }
    ]

    return (
        <div className='w-full'>
            <div>
                <h1>ExploreEase</h1>
            </div>
            <div className=''>
                {
                    navMenu?.map((menus, index) => 
                        <Link key={index} className=''>{ menus.menu }</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Navbabr