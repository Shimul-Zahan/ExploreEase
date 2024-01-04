import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LuClock2 } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { BsExclamationOctagon } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../ActiveTabs/style.css'
import { MdElectricBolt } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const TopDestinationDetails = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='space-y-5'>
            <div>
                <h1 className='text-4xl font-bold'>Sajek The Mother of Nature</h1>
            </div>
            <div className='flex justify-normal items-center gap-5'>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={3}
                    readOnly
                />
                <h1 className='text-lg'>(1 review)</h1>
            </div>
            <div className='flex justify-normal items-center gap-2 lg:gap-10'>
                <div className='flex items-center gap-1'>
                    <LuClock2 className='text-2xl ' />
                    <h1>2 Days 1 Night</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <FaUsers className='text-2xl ' />
                    <h1>Max Guest: 69</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <FaWifi className='text-2xl ' />
                    <h1>Wifi Available</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <MdDateRange className='text-2xl ' />
                    <h1>Jan - Feb</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
                <div className='col-span-3'>
                    <img src="https://img.freepik.com/free-photo/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand_335224-1063.jpg?w=996&t=st=1704307471~exp=1704308071~hmac=42d74df63e743a661136c8f8a26cab8dca5e0f4bb33415dc2d8e969bd7a57bff" alt="" className='lg:h-[400px] w-full rounded-lg' />
                </div>
                <div className='col-span-2 grid grid-cols-2 justify-center items-center gap-5'>
                    <img src="https://img.freepik.com/premium-photo/scenic-landscape-agriculture-field-with-fog-hill-thailand_40185-322.jpg?size=626&ext=jpg" alt="" className='h-full w-full rounded-lg' />
                    <img src="https://img.freepik.com/free-photo/downtown-cityscape-night-seoul-south-korea_335224-272.jpg?size=626&ext=jpg" alt="" className='h-full w-full rounded-lg' />
                    <img src="https://img.freepik.com/free-photo/cows-green-field_335224-509.jpg?size=626&ext=jpg" alt="" className='h-full w-full rounded-lg' />
                    <img src="https://img.freepik.com/free-photo/garden-flowers-mae-fah-luang-garden-locate-doi-tung-chiang-rai-thailand_335224-967.jpg?size=626&ext=jpg" alt="" className='h-full w-full rounded-lg' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-7 gap-5 py-10'>
                <div className='col-span-5 space-y-5'>
                    <h1 className='text-xl font-bold'>Details</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro quaerat sapiente odio accusantium id et excepturi. Excepturi, debitis! Dolore neque non iure natus velit odit possimus doloribus, nulla debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sit neque quaerat deserunt tempora illum, blanditiis error et beatae rem, ratione sequi animi magnam voluptatem fuga vero. Eius, adipisci maiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laborum nobis ut quos inventore consequatur amet voluptatem dignissimos ipsum sunt asperiores, modi ab, blanditiis nesciunt, labore soluta cum! Quisquam, iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br /> Dolor suscipit voluptatem neque ut harum animi, recusandae natus quod rem earum accusamus dolorem facilis quidem quibusdam est consectetur, dicta fugiat assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem autem harum minus ab quos, temporibus impedit velit ratione incidunt sequi nam cupiditate asperiores, aperiam eligendi libero. Nihil, eos possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> <br /> A suscipit ab iure incidunt modi distinctio sint nam, asperiores quaerat iste ut facilis porro, illo aut eius dolor nobis fugiat non? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel neque beatae reprehenderit laborum. Id placeat rerum tenetur recusandae reiciendis necessitatibus magni commodi dolorum. Repudiandae aut ea dolorum necessitatibus. Sequi, reprehenderit!</h1>
                    <h1 className='text-xl font-bold'>What to Expect</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro quaerat sapiente odio accusantium id et excepturi. Excepturi, debitis! Dolore neque non iure natus velit odit possimus doloribus, nulla debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sit neque quaerat deserunt tempora illum, blanditiis error et beatae rem, ratione sequi animi magnam voluptatem fuga vero. Eius, adipisci maiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laborum nobis ut quos inventore consequatur amet voluptatem dignissimos ipsum sunt asperiores, modi ab, blanditiis nesciunt, labore soluta cum! Quisquam, iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
                <div className='col-span-2 space-y-10'>
                    <div className='shadow-xl p-10 rounded-lg text-lg'>
                        <h1 className='text-lg mb-5'>Price</h1>
                        <div className='flex justify-start items-center gap-2 mb-2'>
                            <IoPricetagOutline />
                            <p>From</p>
                            <div className='relative'>
                                <p className='text-3xl font-bold'>$1,200</p>
                                <div className='absolute -top-2 -right-3 text-sm'>
                                    <BsExclamationOctagon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                <TabList>
                                    <Tab>
                                        <div>
                                            <button className="text-base pr-2 py-2 rounded-full">
                                                Booking Form
                                            </button>
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div>
                                            <button className="text-base py-2 rounded-full">
                                                Enquiry Form
                                            </button>
                                        </div>
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <div className='py-4'>
                                        <h1 className='text-base text-gray-500'>Available:- 2 Seat</h1>
                                        <div className='flex justify-start items-center gap-4'>
                                            <FaUsers className='text-2xl' />
                                            <div className='w-full text-lg lg:px-0 pb-5'>
                                                <select className="select select-bordered w-full max-w-xs mt-3">
                                                    <option disabled selected>Any</option>
                                                    <option value='10'>10 Hours+</option>
                                                    <option value='20'>20 Hours+</option>
                                                    <option value='30'>30 Hours+</option>
                                                    <option value='40'>40 Hours+</option>
                                                    <option value='50'>50 Hours+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-start items-center gap-4'>
                                        <MdElectricBolt className='text-2xl text-blue-500' />
                                        <div className='flex justify-start items-center gap-4 bg-blue-500 w-full py-2 px-5'>
                                            <button className='mx-auto'>Procced</button>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='py-4'>
                                        <div className='py-4'>
                                            <h1 className='text-base text-gray-500'>Available:- 2 Seat</h1>
                                            <div className='flex justify-start items-center gap-4'>
                                                <FaUsers className='text-2xl' />
                                                <div className='w-full text-lg lg:px-0 pb-5'>
                                                    <select className="select select-bordered w-full max-w-xs mt-3">
                                                        <option disabled selected>Any</option>
                                                        <option value='10'>10 Hours+</option>
                                                        <option value='20'>20 Hours+</option>
                                                        <option value='30'>30 Hours+</option>
                                                        <option value='40'>40 Hours+</option>
                                                        <option value='50'>50 Hours+</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex justify-start items-center gap-4'>
                                            <MdElectricBolt className='text-2xl text-blue-500' />
                                            <div className='flex justify-start items-center gap-4 bg-blue-500 w-full py-2 px-5'>
                                                <button className='mx-auto'>Procced</button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className='flex justify-end items-center gap-4 text-base mt-8'>
                            <div className='flex items-center gap-1 justify-center'>
                                <IoIosAddCircleOutline className='text-base text-black' />
                                <h1 className=''>Add To Whitelist</h1>
                            </div>
                            <div className='flex items-center gap-1 justify-center'>
                                <FaRegEye />
                                <h1 className=''>1002</h1>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl p-10 rounded-lg text-lg'>
                        <h1 className='text-2xl font-bold mb-5'>Book With Confidence</h1>
                        <div className='flex justify-start items-center gap-1 mb-2'>
                            <BsTelephoneInbound />
                            <p>Cusomer care available 24/7</p>
                        </div>
                        <div className='flex justify-start items-center gap-1 mb-2'>
                            <IoMdMailOpen />
                            <p>Best price guarranty</p>
                        </div>
                        <div className='flex justify-start items-center gap-1 mb-2'>
                            <IoMdMailOpen />
                            <p>Hand picked tours and activities</p>
                        </div>
                        <div className='flex justify-start items-center gap-1 mb-2'>
                            <IoMdMailOpen />
                            <p>Free travel insurance</p>
                        </div>
                    </div>

                    <div className='border border-black p-10 rounded-lg text-lg'>
                        <h1 className='text-2xl font-bold mb-5'>Need Help</h1>
                        <div className='flex justify-start items-center gap-1 mb-2'>
                            <BsTelephoneInbound />
                            <p>+880 1714760739</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <IoMdMailOpen />
                            <p>abc.fu**@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestinationDetails