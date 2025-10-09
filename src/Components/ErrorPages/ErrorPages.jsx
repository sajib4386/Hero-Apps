import React from 'react'
import errorImg from "../../assets/error-404.png"

const ErrorPages = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <img src={errorImg} alt="" />
      <div className='text-center mt-10'>
        <h1 className='text-6xl font-semibold'>Oops, page not found!</h1>
        <p className='text-xl text-gray-600 mt-5'>The page you are looking for is not available.</p>
      </div>
      <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-40 h-14 text-white mt-5">Go Back!</button>
    </div>
  )
}

export default ErrorPages