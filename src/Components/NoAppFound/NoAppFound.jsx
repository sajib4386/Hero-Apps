import React from 'react'
import noAppFoundImg from "../../assets/App-Error.png"

const NoAppFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <img src={noAppFoundImg} alt="" className='w-96' />
            <div>
                <h2 className="text-4xl font-bold text-red-500 mb-4 text-center">Oops! App Not Found</h2>
                <p className='text-black text-2xl'> Sorry, we couldn't find any app matching your search.</p>
            </div>
        </div>
    )
}

export default NoAppFound