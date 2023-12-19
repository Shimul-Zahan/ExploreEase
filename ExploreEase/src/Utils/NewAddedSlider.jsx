import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../assets/Newly-added/benjamin-voros-JhjDL3TZKJk-unsplash-700x500.jpg'
import image2 from '../assets/Newly-added/dalibor-gdv85ik8CR4-unsplash-900x500.jpg'
import image3 from '../assets/Newly-added/geran-de-klerk-N9s3FjzsstM-unsplash-700x500.jpg'
import image4 from '../assets/Newly-added/iStock-1168406196-700x500.jpg'
import image5 from '../assets/Newly-added/nikolay-vorobyev-QJ2HGuSSQz0-unsplash-700x500.jpg'
import image6 from '../assets/Newly-added/omar-yehia-v8qWbKNEAIE-unsplash-700x500.jpg'
import image7 from '../assets/Newly-added/pascal-debrunner-KFq835juuy4-unsplash-700x500.jpg'
import image8 from '../assets/Newly-added/stephen-leonardi-UWtb-3v6jQ-unsplash-700x500.jpg'
import image9 from '../assets/Newly-added/victor-ene-CmRp_0MG8f0-unsplash-700x500.jpg'

export default function NewAddedSlider() {
    return (
        <>
            <div className='px-4 md:p-10 my-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    clickable={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        // 1024: {
                        //     slidesPerView: 5,
                        //     spaceBetween: 50,
                        // },
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image1} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image2} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image3} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image4} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image5} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image6} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image7} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image8} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-gray-100 rounded-br-lg rounded-bl-lg overflow-hidden group'>
                            <img src={image9} alt="" className='rounded-tr-lg rounded-tl-lg h-52 w-full group-hover:scale-[1.1] duration-500' />
                            <div className='px-4 py-6 space-y-2'>
                                <p className='text-xl font-bold'>Africa – Amazing African Safari</p>
                                <p>Rating: ****</p>
                                <p className='text-base'>From<span className='text-lg text-blue-400'>$1,200</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}