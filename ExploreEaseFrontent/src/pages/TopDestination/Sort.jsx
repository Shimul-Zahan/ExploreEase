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
                        <h1 className='text-base text-indigo-700'>Destination</h1>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Australia</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="australia"
                                    checked={selectedOption === 'australia'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Asia</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="asia"
                                    checked={selectedOption === 'asia'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Middle East</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="middleeast"
                                    checked={selectedOption === 'middleeast'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Africa</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="africa"
                                    checked={selectedOption === 'africa'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">America</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="america"
                                    checked={selectedOption === 'america'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Europe</span>
                                <input
                                    type="radio"
                                    name="Hours"
                                    value="europe"
                                    checked={selectedOption === 'europe'}
                                    onChange={handleOptionChange}
                                    className="radio"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort