import React, { use } from 'react'
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts'

const RatingsChart = ({ ratingsPromise, appId }) => {

    const ratingsDataRes = use(ratingsPromise)

    const ratingsData = ratingsDataRes

    const app = ratingsData.find(app => app.id === Number(appId));


    const appRatings = app.ratings.map(ratings => ({
        name: ratings.name,
        count: ratings.count
    }));

    return (
        <div className='border-t-2 border-gray-300 p-3'>
            <h2 className='text-xl font-semibold'>Rattings</h2>
            <BarChart width={800} height={300} data={appRatings}  layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" reversed={true} />
                <Tooltip></Tooltip>
                <Bar dataKey="count" fill="orange" barSize={30}/>
            </BarChart>
        </div>
    )
}

export default RatingsChart