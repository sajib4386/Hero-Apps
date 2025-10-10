import React from 'react'

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (

        <footer className='bg-[#001931] mx-auto p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-5 justify-items-center'>
                <div>
                    <h2 className='text-2xl text-[#9F62F2] text-center'>Imaginative Minds <br />For Imaginative Brands.</h2>
                    <div className='mt-5'>
                        <p className='text-gray-300 mb-2 text-center lg:text-start'>Subscribe to our newsletter</p>
                        <input type="text" placeholder='Your Email Address' className='border-2 border-gray-700 py-2 px-6 rounded-xl placeholder-white' />
                    </div>
                </div>

                <div className='mt-5 lg:mt-0'>
                    <h6 className='text-2xl font-bold text-gray-300  text-center lg:text-start'>Services</h6>
                    <div className='text-white flex gap-3 lg:gap-0 text-center lg:text-start lg:flex-col'>
                        <a>Branding</a>
                        <a>Design</a>
                        <a>Marketing</a>
                        <a>Advertisement</a>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h6 className='text-2xl font-bold text-gray-300 text-center lg:text-start'>Company</h6>
                    <div className='text-white flex gap-3 lg:gap-0 text-center lg:text-start lg:flex-col'>
                        <a>About us</a>
                        <a>Contact</a>
                        <a>Jobs</a>
                        <a>Press kit</a>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h6 className='text-2xl font-bold text-gray-300 text-center lg:text-start'>Legal</h6>
                    <div className='text-white flex gap-3 lg:gap-0 text-center lg:text-start lg:flex-col'>
                        <a>Terms of use</a>
                        <a>Privacy policy</a>
                        <a>Cookie policy</a>
                    </div>
                </div>

                <div className='mt-5 lg:mt-0'>
                    <h2 className='text-white font-bold text-xl text-center lg:text-end'>Social Links</h2>
                    <div className='text-white flex gap-3 lg:gap-0 text-center lg:text-end lg:flex-col'>
                        <span><FaSquareXTwitter className='w-7 h-7 mt-2' /></span>
                        <span><FaFacebook className='w-7 h-7 mt-2' /></span>
                        <span><FaSquareInstagram className='w-7 h-7 mt-2' /></span>
                        <span><FaGithub className='w-7 h-7 mt-2' /></span>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer