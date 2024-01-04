import React from 'react'
import Navbabr from '../Home/Components/Navbabr'

const MountainHome = () => {
    return (
        <div>
            <Navbabr />
            <div className='relative'>
                <img src="https://img.freepik.com/free-photo/beautiful-shot-top-mountain_181624-21611.jpg?w=1060&t=st=1704392696~exp=1704393296~hmac=a6827e9b8ade25393c638d4089211208402ef6b50cb96624d1fa10b686eae42d" alt="" className='w-full lg:h-[500px]' />
                <h1 className='text-4xl text-white font-bold flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%]'>Mountaing || Slider hobe ekhane</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-5 lg:mb-20'>
                <div className='bg-gray-300 text-center p-10 space-y-2'>
                    <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-base font-thin text-orange-500 font-mono'>Lorem ipsum dolor sit.</p>
                    <p className='text-base font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veritatis sed eius autem corrupti voluptatibus iure. Eaque maiores, necessitatibus aliquid commodi non, sunt delectus quod ipsa fugiat omnis quam voluptates!</p>
                    <button className='text-base font-thin text-orange-500 font-mono'>View More</button>
                </div>
                <div className='text-center p-10 space-y-2'>
                    <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-base font-thin text-orange-500 font-mono'>Lorem ipsum dolor sit.</p>
                    <p className='text-base font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veritatis sed eius autem corrupti voluptatibus iure. Eaque maiores, necessitatibus aliquid commodi non, sunt delectus quod ipsa fugiat omnis quam voluptates!</p>
                    <button className='text-base font-thin text-orange-500 font-mono'>View More</button>
                </div>
                <div className='bg-gray-300 text-center p-10 space-y-2'>
                    <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-base font-thin text-orange-500 font-mono'>Lorem ipsum dolor sit.</p>
                    <p className='text-base font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veritatis sed eius autem corrupti voluptatibus iure. Eaque maiores, necessitatibus aliquid commodi non, sunt delectus quod ipsa fugiat omnis quam voluptates!</p>
                    <button className='text-base font-thin text-orange-500 font-mono'>View More</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 mb-5 lg:mb-20'>
                <div className='col-span-3'>
                    <img src="https://img.freepik.com/free-photo/beautiful-shot-top-mountain_181624-21611.jpg?w=1060&t=st=1704392696~exp=1704393296~hmac=a6827e9b8ade25393c638d4089211208402ef6b50cb96624d1fa10b686eae42d" alt=""
                        className='lg:h-[500px] w-full'
                    />
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2'>
                        <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='h-[250px] w-full' />
                        <img src="https://img.freepik.com/free-photo/beautiful-shot-top-mountain_181624-21611.jpg?w=1060&t=st=1704392696~exp=1704393296~hmac=a6827e9b8ade25393c638d4089211208402ef6b50cb96624d1fa10b686eae42d" alt="" className='h-[250px] w-full' />
                        <img src="https://img.freepik.com/free-photo/breathtaking-view-beautiful-grassy-fields-mountains-clouds-sky_181624-7988.jpg?t=st=1704393795~exp=1704394395~hmac=b89f3184774f46468e1baee7c8314d262a227dcfe8e70fdd8edfd0a4e1df88a7" alt="" className='h-[250px] w-full' />
                        <img src="https://img.freepik.com/premium-photo/beautiful-nature-scenery-dusk-winter-season-sky-pink-clouds_363815-34.jpg" alt="" className='h-[250px] w-full' />
                    </div>
                </div>

            </div>
            <div className='p-4 lg:p-10 mx-auto grid gap-5 lg:gap-10 grid-cols-2 lg:grid-cols-4 mb-5 lg:mb-20'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Color it all</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 className='text-xl font-bold my-2'>Branding</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Promotions & Events</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Adverisement</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <img src="https://img.freepik.com/free-photo/vertical-outdoor-shot-cheerful-female-makes-professional-photos-sits-rocks-near-mountain-river_273609-26966.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='h-[280px] w-full' />
                <img src="https://img.freepik.com/free-photo/hipster-style-tourist-writing_23-2147652882.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='h-[280px] w-full' />
                <img src="https://img.freepik.com/premium-photo/man-standing-mountain-smiling_137573-481.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='h-[280px] w-full' />
                <img src="https://img.freepik.com/free-photo/portrait-young-pretty-traveler_23-2147842481.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='h-[280px] w-full' />
            </div>
            <div className='p-4 px-10 bg-orange-500 lg:p-10 mx-auto grid gap-5 lg:gap-10 grid-cols-2 lg:grid-cols-5'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Color it all</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 className='text-xl font-bold my-2'>Branding</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Promotions & Events</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Adverisement</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="https://img.freepik.com/premium-photo/mountain-landscape-mont-blanc-view-la-clusaz-haute-savoie-france_118047-8977.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <h1 h1 className='text-xl font-bold my-2'>Adverisement</h1>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 mb-5 lg:mb-20'>
                <img src="https://img.freepik.com/free-photo/full-length-shot-positive-photographer-takes-picture-turquoise-mountain-river-poses-beautiful-place-tourist-visit_273609-27385.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='lg:h-[500px] w-full' />
                <img src="https://img.freepik.com/free-photo/traveler-girl-searching-right-direction-map_1150-45010.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='lg:h-[500px] w-full' />
                <img src="https://img.freepik.com/free-photo/medium-shot-woman-wearing-total-denim-outfit_23-2150105223.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='lg:h-[500px] w-full' />
                <img src="https://img.freepik.com/free-photo/young-female-traveler-with-backpack-binoculars_23-2147842482.jpg?size=626&ext=jpg&ga=GA1.1.1795732793.1701352747&semt=ais" alt="" className='lg:h-[500px] w-full' />
            </div>
        </div>
    )
}

export default MountainHome