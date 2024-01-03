import React, { useState } from 'react'

const Sort = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div class="border space-y-3">
                <div className='flex justify-start items-center gap-2 bg-gray-300 py-3 px-5 font-bold'><h1>FILTER BY</h1></div>
                <div className="space-y-2 px-5">
                    <div className='w-full text-lg lg:px-0 pb-5'>
                        <h1 className='text-base text-indigo-700'>Tour Age</h1>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">10 Hours+</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="10"
                                    checked={selectedOption === '10'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">20 Hours+</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="20"
                                    checked={selectedOption === '20'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">30 Hours+</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="30"
                                    checked={selectedOption === '30'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">40 Hours+</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="40"
                                    checked={selectedOption === '40'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">50 Hours+</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="50"
                                    checked={selectedOption === '50'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                        </div>
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
    )
}

export default Sort