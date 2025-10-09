import React, { useEffect, useState } from 'react'
import AllApp from '../AllApp/AllApp'
import { useLoaderData } from 'react-router'
import { CiSearch } from "react-icons/ci";
import NoAppFound from '../NoAppFound/NoAppFound';
import Loader from '../Loader/Loader';

const AllApps = () => {

    const allApps = useLoaderData()
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)
    const [filteredApps, setFilteredApps] = useState(allApps);


    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {
            const filtered = allApps.filter(app =>
                app.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredApps(filtered);
            setLoading(false);
        }, 150);

        return () => clearTimeout(timer);

    }, [search, allApps]);

    return (
        <div className='mb-16'>
            <h2 className='text-black text-center text-4xl font-bold mt-20 mb-5'>Our All Applications</h2>
            <p className='text-[#627382] text-center text-2xl'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
                <p className="text-xl font-semibold text-black">
                    ( {filteredApps.length} ) App Founds
                </p>
                <div className='relative'>
                    <span><CiSearch className='text-black w-10 h-5 absolute top-3' /></span>
                    <input
                        type="text"
                        placeholder="Search apps..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-lg px-10 py-2  placeholder-gray-500 text-black focus:outline-none focus:border-blue-500"
                    ></input>
                </div>

                {
                    loading && <Loader></Loader>
                }

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {filteredApps.length > 0 ?
                    (
                        filteredApps.map(app => <AllApp key={app.id} app={app} />)
                    ) :
                    (
                        <div className='col-span-full'>
                            <NoAppFound></NoAppFound>
                        </div>
                    )}
            </div>


        </div>
    )
}

export default AllApps