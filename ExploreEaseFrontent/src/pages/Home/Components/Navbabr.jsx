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
        },
        {
            menu: 'Extra',
            link: '/registration',
        }
    ]

    return (
        <div className='grid grid-cols-6 text-center justify-between items-center px-4 md:px-10 bg-gray-300 py-8'>
            {
                navMenu?.map((nav, index) => 
                    <li className={`list-none ${index % 2 !== 0 && index !== navMenu.length - 1 ? "border-x-2" : index === navMenu.length - 1 ? 'border-l-2':'none'}`}>
                        <Link>{ nav?.menu }</Link>
                    </li>
                )
            }
        </div>
    )
}

export default Navbabr