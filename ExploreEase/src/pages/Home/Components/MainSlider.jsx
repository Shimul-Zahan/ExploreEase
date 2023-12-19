import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';
import image1 from '../../../assets/main-slider/destitnation-title-img-10.jpg'
import image2 from '../../../assets/main-slider/h2-destination-f-img-1.jpg'
import image3 from '../../../assets/main-slider/h2-destination-f-img-2.jpg'
import image4 from '../../../assets/main-slider/h3-fullsc-img-1.jpg'
import image5 from '../../../assets/main-slider/h4-destination-grid-img-2.jpg'
import image6 from '../../../assets/main-slider/h4-destination-grid-img-3.jpg'
import image7 from '../../../assets/main-slider/h5-img-1.jpg'
import image8 from '../../../assets/main-slider/h5-img-2.jpg'
import image9 from '../../../assets/main-slider/h5-img-3.jpg'
import image10 from '../../../assets/main-slider/home-1-destination-image-2.jpg'
import image11 from '../../../assets/main-slider/home-1-destination-image-3.jpg'

export default function MainSlider() {
    return (
        <>
            <div className='px-4 md:p-10 mt-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center items-center'>
                            <div className='h-[400px] w-1/2 bg-red-500 flex justify-center items-center flex-col'>
                                <img src={image1} alt="" className='w-full h-full' />
                                <img src={image2} alt="" className='w-full h-full' />
                            </div>
                            <div className='h-[400px] w-1/2 bg-red-500'>
                                <img src={image3} alt="" className='w-full h-full' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500'>
                            <img src={image4} alt="" className='w-full h-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500 grid grid-cols-2 justify-center items-center'>
                            <img src={image5} alt="" className='w-full h-[200px]' />
                            <img src={image6} alt="" className='w-full h-[200px]' />
                            <img src={image7} alt="" className='w-full h-[200px]' />
                            <img src={image8} alt="" className='w-full h-[200px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500'>
                            <img src={image9} alt="" className='w-full h-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center'>
                            <div className='h-[400px] w-1/2 bg-red-500 flex justify-center items-center flex-col'>
                                <img src={image10} alt="" className='w-full h-full' />
                                <img src={image11} alt="" className='w-full h-full' />
                            </div>
                            <div className='h-[400px] w-1/2 bg-red-500'>
                                <img src={image1} alt="" className='w-full h-full' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500'>
                            <img src={image2} alt="" className='w-full h-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500 grid grid-cols-2 justify-center items-center'>
                            <img src={image3} alt="" className='w-full h-[200px]' />
                            <img src={image4} alt="" className='w-full h-[200px]' />
                            <img src={image5} alt="" className='w-full h-[200px]' />
                            <img src={image6} alt="" className='w-full h-[200px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[400px] bg-red-500'>
                            <img src={image7} alt="" className='w-full h-full' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
