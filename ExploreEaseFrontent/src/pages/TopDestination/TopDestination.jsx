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
            <div className='p-4 lg:px-10 lg:py-16'>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
                    <div className='col-span-3 space-y-10'>
                        <div>
                            <div class="border space-y-3">
                                <div className='flex justify-start items-center gap-2 bg-gray-300 py-3 px-5 font-bold'><h1>SORT BY</h1></div>
                                <div className="space-y-2 px-5">
                                    <div className='w-full text-lg lg:px-0 pb-5'>
                                        <h1 className='text-base text-indigo-700'>Keyword</h1>
                                        <select
                                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                                        >
                                            <option disabled className='text-lg' value="default">Search Keyword</option>
                                            <option className='text-lg' value="dhaka">Dhaka</option>
                                            <option className='text-lg' value="rajshahi">Rajshahi</option>
                                            <option className='text-lg' value="chattagram">Chittagone</option>
                                            <option className='text-lg' value="barisal">Barisal</option>
                                            <option className='text-lg' value="sylet">Sylet</option>
                                            <option className='text-lg' value="rangpur">Rangpur</option>
                                            <option className='text-lg' value="khulna">Khulna</option>
                                            <option className='text-lg' value="mymensingh">Mymensingh</option>
                                        </select>
                                    </div>
                                    <div className='w-full text-lg lg:px-0 pb-5'>
                                        <h1 className='text-base text-indigo-700'>Duration</h1>
                                        <select
                                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                                        >
                                            <option disabled className='text-lg' value="default">Duration</option>
                                            <option className='text-lg' value="dhaka">Dhaka</option>
                                        </select>
                                    </div>
                                    <div className='w-full text-lg lg:px-0 pb-5'>
                                        <h1 className='text-base text-indigo-700'>Date</h1>
                                        <select
                                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                                        >
                                            <option disabled className='text-lg' value="default">Date</option>
                                            <option className='text-lg' value="dhaka">Dhaka</option>
                                            <option className='text-lg' value="rajshahi">Rajshahi</option>
                                            <option className='text-lg' value="chattagram">Chittagone</option>
                                            <option className='text-lg' value="barisal">Barisal</option>
                                            <option className='text-lg' value="sylet">Sylet</option>
                                            <option className='text-lg' value="rangpur">Rangpur</option>
                                            <option className='text-lg' value="khulna">Khulna</option>
                                            <option className='text-lg' value="mymensingh">Mymensingh</option>
                                        </select>
                                    </div>
                                    <div className='w-full text-lg lg:px-0 pb-5'>
                                        <h1 className='text-base text-indigo-700'>Rating</h1>
                                        <select
                                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                                        >
                                            <option disabled className='text-lg' value="default">Rating</option>
                                            <option className='text-lg' value="dhaka">Dhaka</option>
                                            <option className='text-lg' value="rajshahi">Rajshahi</option>
                                            <option className='text-lg' value="chattagram">Chittagone</option>
                                            <option className='text-lg' value="barisal">Barisal</option>
                                            <option className='text-lg' value="sylet">Sylet</option>
                                            <option className='text-lg' value="rangpur">Rangpur</option>
                                            <option className='text-lg' value="khulna">Khulna</option>
                                            <option className='text-lg' value="mymensingh">Mymensingh</option>
                                        </select>
                                    </div>
                                    <div className="border-gray-200 bg-white">
                                        <h1 className='text-lg pb-2'>Filter By Price</h1>
                                        <div className="border-t border-gray-200 p-3">
                                            <form className=''>
                                                <div className="flex justify-between flex-col gap-4">
                                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">Min Price</span>

                                                        <input
                                                            type="number"
                                                            name="lowAge"
                                                            placeholder="From"
                                                            className="w-full text-lg rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>

                                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">Max Price</span>

                                                        <input
                                                            type="number"
                                                            name='highAge'
                                                            placeholder="To"
                                                            className="w-full rounded-md text-lg border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                    <button type='submit' className='bg-indigo-500 rounded-sm p-1'>Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-9 space-y-5">
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
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