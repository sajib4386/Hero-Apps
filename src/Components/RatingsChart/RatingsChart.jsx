import React, { use } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const RatingsChart = ({ ratingsPromise, appId }) => {

    const ratingsDataRes = use(ratingsPromise)

    const ratingsData = ratingsDataRes

    const app = ratingsData.find(app => app.id === Number(appId));


    const appRatings = app.ratings.map(ratings => ({
        name: ratings.name,
        count: ratings.count
    }));

    return (
        <div>
            <div className='border-t-2 border-gray-300'></div>
            <div className='p-3 w-full lg:max-w-[1000px]'>
                <h2 className='text-xl text-black font-semibold'>Rattings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={appRatings} layout="vertical">
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" reversed={true} />
                        <Bar dataKey="count" fill="orange" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RatingsChart