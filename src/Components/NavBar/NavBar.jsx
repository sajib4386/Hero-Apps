import React from 'react'
import navImg from "../../assets/logo.png"
import { NavLink } from 'react-router'
import gitHubIcon from "../../assets/github_icon.png"

const NavBar = () => {
    const links = <>
    <NavLink><li className='text-[#9F62F2] font-semibold text-xl'>Home</li></NavLink>
    <NavLink><li className='text-black text-xl'>Apps</li></NavLink>
    <NavLink><li className='text-black text-xl'>Installation</li></NavLink>

    </>
    return (
        <div className="navbar shadow-sm max-w-[1500px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white border-2 absolute top-14 border-green-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={navImg} alt="" className='w-10 h-10'/>
                <a className="btn btn-ghost text-xl text-[#9F62F2]">HERO.IO</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><span><img src={gitHubIcon} alt="" className='w-5 h-5' /></span>Contribute</a>
            </div>
        </div>
    )
}

export default NavBar