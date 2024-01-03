import React from 'react'
import Navbabr from '../Home/Components/Navbabr'
import Banner from '../../Utils/Banner'
import Sort from './Sort'
import Filter from './Filter'
import { Link } from 'react-router-dom'


const TopDestination = () => {
    return (
        <div>
            <div className='fixed w-full'>
                <Navbabr />
            </div>
            <Banner />
            <div className='p-4 lg:px-10 lg:py-16'>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
                    <div className='col-span-3 space-y-10'>
                        <div className='space-y-5'>
                            <Filter />
                            <Sort />
                        </div>
                    </div>
                    <div class="col-span-9 space-y-5">
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            <Link to='/tour-details'>
                                <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                                    <img src="https://img.freepik.com/free-vector/colorful-map-asia_23-2147807672.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=ais" alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                                    <div className='px-4 py-6 space-y-2'>
                                        <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                        <p>Rating: ****</p>
                                        <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                                    </div>
                                </div>
                            </Link>
                            <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                                <img src="https://img.freepik.com/free-vector/colorful-map-asia_23-2147807672.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=ais" alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                                <div className='px-4 py-6 space-y-2'>
                                    <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                    <p>Rating: ****</p>
                                    <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                                </div>
                            </div>
                            <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                                <img src="https://img.freepik.com/free-vector/colorful-map-asia_23-2147807672.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=ais" alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                                <div className='px-4 py-6 space-y-2'>
                                    <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                    <p>Rating: ****</p>
                                    <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                                </div>
                            </div>
                            <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                                <img src="https://img.freepik.com/free-vector/colorful-map-asia_23-2147807672.jpg?size=626&ext=jpg&uid=P69727906&ga=GA1.1.435112184.1700343142&semt=ais" alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                                <div className='px-4 py-6 space-y-2'>
                                    <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                    <p>Rating: ****</p>
                                    <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="flex justify-center gap-1 text-lg font-medium">
                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            1
                        </a>
                    </li>

                    <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                        2
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            4
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default TopDestination