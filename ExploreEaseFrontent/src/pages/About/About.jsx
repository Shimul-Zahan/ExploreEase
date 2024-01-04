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
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="/services/digital-campaigns"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="/services/digital-campaigns"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="/services/digital-campaigns"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About