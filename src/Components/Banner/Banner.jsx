import React from 'react'
import playStoreIcon from "../../assets/playstore.png"
import appStoreIcon from "../../assets/appstore.png"
import bannerImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-[#001931] text-7xl font-bold'>We Build <br /><span className='text-[#9F62F2]'>Productive</span> Apps</h2>
                <p className='text-[#627382] mt-5 text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex justify-center items-center gap-3 mt-5'>
                <button className='flex items-center gap-2 border-2 border-[#D2D2D2] p-2 rounded-xl'>
                    <img src={playStoreIcon} alt="" className='w-7 h-7' />
                    <a className="text-xl text-black">Google Play</a>
                </button>
                <button className='flex items-center gap-2 border-2 border-[#D2D2D2] p-2 rounded-xl'>
                    <img src={appStoreIcon} alt="" className='w-7 h-7' />
                    <a className="text-xl text-black">App Store</a>
                </button>
            </div>
            <img src={bannerImg} alt= "" className='w-[700px] mx-auto mt-10'/>
        </div>
    )
}

export default Banner