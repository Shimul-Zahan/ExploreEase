import React from 'react'

const TourList = () => {
    return (
        <div className='px-4 py-20 md:px-10'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold text-blue-400'>TOUR LISTS</h1>
                <p className='px-5 py-2'>You Can Pick It On One Click</p>
            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/premium-photo/girl-sitting-edge-rock-taking-pleasure-landscape-machu-picchu_143092-1714.jpg?w=740" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Mountain</h1>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=996&t=st=1704127444~exp=1704128044~hmac=9bc477314f0311181aa96de84e7a3f84db14ec8e51ba9cbb91fa326e4ecd81da" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Vacatione</h1>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/free-photo/full-shot-woman-taking-selfie_23-2149153257.jpg?1&w=1060&t=st=1704127658~exp=1704128258~hmac=fbe01ecea5f81545233983576a2384644198fbd3e19774dc3f0e840538971773" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Travel</h1>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/premium-photo/view-morning-mist-sun-rise-doi-ang-khang-mountain-thailand_44353-1878.jpg?w=1060" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Campaign</h1>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/free-photo/boys-fighting-ball-when-playing-football_74855-19958.jpg?w=996&t=st=1704127531~exp=1704128131~hmac=78c4e584a16435f363a3c5920daa32576330b954164e6eed0ca586966256cab5" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Holiday</h1>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src="https://img.freepik.com/free-photo/standing-top-mountain-peak-success-achieved-generated-by-ai_188544-33348.jpg?w=1060&t=st=1704127753~exp=1704128353~hmac=e51fd75b8ecbc5cfdf5e1bb457193027f84bea9116712e0d2c40ba63988b99bc" alt="" className='h-[400px] w-full scale-[1.2] hover:scale-[1] duration-700' />
                    <div className='text-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Adventure</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourList