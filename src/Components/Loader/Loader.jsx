import React from 'react'
import loaderImg from "../../assets/logo.png"

const Loader = () => {
    return (
        <div className="flex justify-center items-center bg-white bg-opacity-50 z-50 fixed inset-0 gap-3">
            <span className='text-3xl font-bold text-[#9F62F2]'>L</span>
            <img src={loaderImg} alt="" className="w-20 h-20 animate-spin" />
            <span className='text-3xl font-bold text-[#9F62F2]'>oading</span>
        </div>
    )
}

export default Loader