import React from 'react'
import navImg from "../../assets/logo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import instagramIcon from "../../assets/instagram_icon.png"
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#001931] max-w-[1500px] mx-auto p-10'>
            <div className='flex justify-between items-center border-b-2 border-[#1c315d] mb-8'>
                <div className='flex items-center'>
                    <img src={navImg} alt="" className='w-8 h-8' />
                    <a className="btn btn-ghost  text-white">HERO.IO</a>
                </div>
                <div>
                    <h2>Social Links</h2>
                    <div className='flex gap-2 mt-3'>
                        <span><FaSquareXTwitter /></span>
                        <span><img src={instagramIcon} alt="" className='w-4 h-4' /></span>
                        <span><FaFacebook /></span>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>

        </footer>
    )
}

export default Footer