import React from 'react'

const States = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-16'>
            <p className='text-center text-5xl font-semibold'>Trusted by Millions, Built for You</p>
            <div className='flex justify-center items-center gap-32 mt-10'>
                <div className='text-center'>
                    <h1>Total Downloads</h1>
                    <p className='text-7xl font-bold mt-2'>29.6M</p>
                    <p className='mt-2'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <h1>Total Reviews</h1>
                    <p className='text-7xl font-bold mt-2'>906K</p>
                    <p className='mt-2'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <h1>Active Apps</h1>
                    <p className='text-7xl font-bold mt-2'>132+</p>
                    <p className='mt-2'>31 more will Launch</p>
                </div>
            </div>

        </div>
    )
}

export default States