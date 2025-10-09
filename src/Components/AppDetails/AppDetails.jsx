import React, { Suspense, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsImg from "../../assets/review.png"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import RatingsChart from "../RatingsChart/RatingsChart";

const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const app = data.find((app) => app.id === Number(id));


    const ratingsPromise = axios.get('/ratingsData.json').then(res => res.data)

    const { image, title, companyName, description, size, downloads, ratingAvg, reviews } = app;

    const [installed, setInstalled] = useState(false);

    const handleInstall = () => {
        setInstalled(true);
        toast(`${title} installed successfully!`);
    };


    return (

        <div className="mx-auto mt-10 p-8  rounded-3xl ">
            <ToastContainer position="top-center" />

            <div className="flex items-start gap-6 mb-6">
                <img src={image} alt={title} className="w-72 h-72" />
                <div className="flex-1">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                        <p className="text-black text-sm mb-2">Developed by <span className="font-medium text-[#9F62F2]">{companyName}</span></p>
                        <div className="border-b-2 text-gray-300 mt-7"></div>
                    </div>

                    <div className="flex items-center gap-6 mt-10">
                        <div className="text-center">
                            <img src={downloadIcon} alt="" className="w-7 h-7 mb-1" />
                            <p className="text-gray-500 text-xl">Downloads</p>
                            <p className="text-green-600 font-bold text-lg">{downloads}</p>
                        </div>
                        <div className="text-center ml-10">
                            <img src={ratingsIcon} alt="" className="w-7 h-7 mb-1" />
                            <p className="text-gray-500 text-xl">Average Ratings</p>
                            <p className="text-yellow-500 font-bold text-lg text-start">{ratingAvg}</p>
                        </div>
                        <div className="text-center ml-10">
                            <img src={reviewsImg} alt="" className="w-7 h-7 mb-1" />
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                            <p className="text-purple-600 font-bold text-lg">{reviews}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className="ml-auto bg-green-500 text-white px-5 py-2 rounded-xl text-xl font-semibold mt-5">
                        {installed ? "Installed" : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>
            <Suspense fallback={<span>loading...</span>}>
                <RatingsChart ratingsPromise = {ratingsPromise}  appId={id}></RatingsChart>
            </Suspense>

            <div className="border-b-2 text-gray-300 mt-7"></div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Description</h3>
                <p className="text-gray-600 leading-relaxed text-[16px]">{description}</p>
            </div>
        </div>

    );
};


export default AppDetails;
