import React from 'react'

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (

        <footer className='bg-[#001931] mx-auto p-10'>
            <div className='flex justify-around'>
                <div>
                    <h2 className='text-2xl text-[#9F62F2]'>Imaginative Minds <br />For Imaginative Brands.</h2>
                    <div className='mt-5'>
                        <p className='text-gray-400 mb-2'>Subscribe to our newsletter</p>
                        <input type="text" placeholder='Your Email Address' className='border-2 border-gray-700 py-2 px-6 rounded-xl' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-2xl font-bold text-gray-500'>Services</h6>
                    <a>Branding</a>
                    <a>Design</a>
                    <a>Marketing</a>
                    <a>Advertisement</a>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-2xl font-bold text-gray-500'>Company</h6>
                    <a>About us</a>
                    <a>Contact</a>
                    <a>Jobs</a>
                    <a>Press kit</a>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-2xl font-bold text-gray-500'>Legal</h6>
                    <a>Terms of use</a>
                    <a>Privacy policy</a>
                    <a>Cookie policy</a>
                </div>

                <div>
                    <h2 className='text-white font-bold text-xl'>Social Links</h2>
                    <div>
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