import React from 'react'
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import { getStoredApp } from '../../utility/appStore';
import { toast } from 'react-toastify';

const InstallationPage = ({ a, onUninstall }) => {
    const { image, title, downloads, ratingAvg, size, id } = a;


    const handleUninstall = () => {

        toast(`${title} uninstalled successfully!`);
        

        const storedApps = getStoredApp().filter(appId => appId !== id);
        localStorage.setItem("appList", JSON.stringify(storedApps));

        onUninstall(id);

    }

    return (

        <div className='flex justify-center items-center bg-white shadow-xl mb-5 p-5 gap-5 rounded-2xl mt-10'>

            <div>
                <img src={image} alt="" className="w-20 h-20 rounded-xl" />
            </div>
            <div>
                <span className='text-2xl text-black'>{title}</span>
                <div className='flex items-center mt-2'>
                    <div className="text-center flex gap-2 items-center">
                        <img src={downloadIcon} alt="" className="w-5 h-5 mb-1" />
                        <p className="text-green-600 font-bold text-md">{downloads}</p>
                    </div>
                    <div className="text-center flex gap-2 ml-5 items-center">
                        <img src={ratingsIcon} alt="" className="w-5 h-5 mb-1" />
                        <p className="text-yellow-500 font-bold text-lg text-start">{ratingAvg}</p>
                    </div>
                    <span className='ml-5 font-bold text-gray-500'>{size} MB</span>
                </div>
            </div>
            <button onClick={handleUninstall}
                className="ml-auto bg-green-500 text-white px-5 py-2 rounded-xl text-xl font-semibold mt-5">
                Uninstall
            </button>
            
        </div>

    )
}

export default InstallationPage