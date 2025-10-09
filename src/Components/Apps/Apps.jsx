import React from 'react'
import App from '../App/App'
import { NavLink } from 'react-router'

const Apps = ({ data }) => {
    return (
        <div>
            <h2 className='text-black text-center text-4xl font-bold mt-20 mb-5'>Trending Apps</h2>
            <p className='text-[#627382] text-center text-2xl'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                }
            </div>
            <div className='text-center my-10 '>
                <NavLink to="/allApps">
                    <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-40 h-14 text-white">Show All</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Apps