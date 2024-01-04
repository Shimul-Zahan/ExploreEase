import React from 'react'
import aroplane from '../Utils/icon/plane.png'
import explore from '../Utils/icon/binoculars.png'
import culture from '../Utils//icon/masks.png'

const AboutMain = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
            <div className='lg:h-screen'>
                <div className='h-[400px] w-[250px] lg:h-[420px] lg:w-[380px] mx-auto relative'>
                    <img src="https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?t=st=1704337147~exp=1704340747~hmac=67d87ef8a04f747ee035701744cd914750a1cdfbee345766050479dbf53ac29d&w=1060"
                        className='h-full w-full mx-auto rounded-lg'
                        alt="" />

                    <img src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=sph" alt="" className='lg:h-[200px] lg:w-[150px] h-[180px] w-[100px] rounded-lg absolute top-10 -right-10  lg:-right-20' />

                    <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=sph" alt=""
                        className='lg:h-[240px] lg:w-[180px] h-[180px] w-[100px] rounded-lg absolute -bottom-16 lg:-bottom-24 -right-12'
                    />
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=sph" alt=""
                        className='lg:h-[250px] lg:w-[150px] h-[200px] w-[110px] rounded-lg absolute -bottom-32 left-12 lg:-bottom-48 lg:left-16' />

                </div>
            </div>
            <div className='lg:w-[90%] mt-32 lg:mt-0'>
                <h1 className='text-2xl font-medium mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo maxime iste similique est dolorem.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum sed natus at similique animi quia, repellat reprehenderit nostrum fugiat magni ipsa accusantium illo amet repudiandae tempore! Ipsum, exercitationem sequi.</p>
                <div className='flex justify-start items-center gap-5 my-5'>
                    <img src={aroplane} alt="" className='w-10 h-10' />
                    <div>
                        <h1 className='text-lg font-bold'>Book With Confidence</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit incidunt veniam repellendus facere aut harum quis saepe sapiente laboriosam!</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-5'>
                    <img src={explore} alt="" className='w-10 h-10' />
                    <div>
                        <h1 className='text-lg font-bold'>Freedom to discover, confidence to explore</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit incidunt veniam repellendus facere aut harum quis saepe sapiente laboriosam!</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-5 my-5'>
                    <img src={culture} alt="" className='w-10 h-10' />
                    <div>
                        <h1 className='text-lg font-bold'>Dive into the culture</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit incidunt veniam repellendus facere aut harum quis saepe sapiente laboriosam!</p>
                    </div>
                </div>
                <button className='text-white px-10 py-3 bg-blue-400 rounded-lg mt-10'>Book Now!</button>
            </div>
        </div>
    )
}

export default AboutMain