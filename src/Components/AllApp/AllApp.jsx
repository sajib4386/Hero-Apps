import React from 'react'
import downloadIcon from "../../assets/icon-downloads.png"
import ratingsIcon from "../../assets/icon-ratings.png"
import { NavLink } from 'react-router';

const AllApp = ({ app }) => {
    const { image, title, downloads, ratingAvg,id } = app;
    return (

        <NavLink to={`/appDetails/${id}`}>
            <div className="card w-96 shadow-xl rounded-2xl">
                <figure className='rounded-2xl m-3' >
                    <img src={image} alt="" className='w-80 h-60' />
                </figure>
                <div className="card-body">
                    <h2 className='text-black text-xl font-semibold'>{title}</h2>

                    <div className='flex justify-between items-center gap-3 mt-5'>
                        <button className='bg-[#F1F5E8] flex items-center gap-2 p-2 rounded-xl'>
                            <img src={downloadIcon} alt="" className='w-4 h-4' />
                            <span className="text-green-500">{downloads}</span>
                        </button>
                        <button className='bg-[#F1F5E8] flex items-center gap-2  p-2 rounded-xl'>
                            <img src={ratingsIcon} alt="" className='w-4 h-4 text-[#FF8811]' />
                            <span className="text-[#FF8811]">{ratingAvg}</span>
                        </button>
                    </div>
                </div>
            </div >
        </NavLink>
    )
}

export default AllApp 