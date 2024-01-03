import React from 'react'
import { SlCalender } from "react-icons/sl";

const Filter = () => {
    return (
        <div>
            <div class="border space-y-3">
                <div className='flex justify-start items-center gap-2 bg-gray-300 py-3 px-5 font-bold'><h1>SORT BY</h1></div>
                <div className="space-y-2 px-5">
                    <div className='w-full text-lg lg:px-0 pb-5'>
                        <h1 className='text-base text-indigo-700'>Keyword</h1>
                        <div className="relative border rounded-md w-full mt-2">
                            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-5.2-5.2"
                                    />
                                    <circle cx="10" cy="10" r="8" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border-none focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className='w-full text-lg lg:px-0 pb-5'>
                        <h1 className='text-base text-indigo-700'>Duration</h1>
                        <select className="select select-bordered w-full max-w-xs mt-3">
                            <option disabled selected>Any</option>
                            <option value='10'>10 Hours+</option>
                            <option value='20'>20 Hours+</option>
                            <option value='30'>30 Hours+</option>
                            <option value='40'>40 Hours+</option>
                            <option value='50'>50 Hours+</option>
                        </select>
                    </div>
                    <div className='w-full text-lg lg:px-0 pb-5'>
                        <h1 className='text-base text-indigo-700'>Date</h1>
                        <div className="relative border rounded-md w-full mt-2">
                            <input
                                type="date"
                                placeholder="Search"
                                className="w-full p-2 border-none focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
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
    )
}

export default Filter