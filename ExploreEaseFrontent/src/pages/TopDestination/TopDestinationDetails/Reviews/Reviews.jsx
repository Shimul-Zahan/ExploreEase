import React from 'react'
import Ratings from '../Rating/Ratings';

const Reviews = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-xl font-medium text-green-400'>Reviews</h1>
                <p>There are no reviews yet.</p>
            </div>
            <div>
                <h1 className='text-xl font-medium text-green-400'>Be the first to review “Sajek”</h1>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="flex justify-normal items-center gap-2">
                    <Ratings />
                    <p>Your rating *</p>
                </div>
                <section className="">
                    <div className="rounded-lg lg:col-span-3">
                        <form className="space-y-4">
                            <div>
                                <textarea
                                    className="w-full rounded-lg border-black border-2 p-3 text-sm"
                                    placeholder="Feedback"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-black border-2 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <input
                                        className="w-full rounded-lg border-black border-2 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="w-full text-black border-2 border-black rounded-full ">
                                <button
                                    type="submit"
                                    className="inline-block px-5 py-3 font-medium sm:w-auto"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Reviews