import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getStoredApp } from '../../utility/appStore'
import InstallationPage from '../InstallationPage/InstallationPage'

const AppList = () => {
    const [appList, setAppList] = useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApp()
        const convertedStoredApps = storedAppData.map(id => parseInt(id))
        const myAppList = data.filter(app => convertedStoredApps.includes(app.id))
        setAppList(myAppList)
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === "Low-High") {
            const sortedByLow = [...appList].sort((a, b) => a.downloads - b.downloads)
            setAppList(sortedByLow)
        }
        if (type === "High-Low") {
            const sortedByHigh = [...appList].sort((a, b) => b.downloads - a.downloads)
            setAppList(sortedByHigh)
        }



    }
    const handleUninstall = (id) => {
        setAppList(apps => apps.filter(app => app.id !== id))
    }
    return (
        <div className='bg-gray-100 p-32 min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-black'>Your Installed Apps</h1>
                <p className='text-3xl text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mt-14'>
                <span className='text-2xl font-semibold p-4 text-black'>
                    {appList.length} Apps Found
                </span>

                <details className="dropdown">
                    <summary className="btn">Sort By Size : {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-30 absolute top-12 border-2 border-blue-300 p-2 shadow-sm">
                        <li onClick={() => handleSort("Low-High")}><a>Low-High</a></li>
                        <li onClick={() => handleSort("High-Low")}><a>High-Low</a></li>
                    </ul>
                </details>
            </div>
            {
                appList.map(a => <InstallationPage key={a.id} a={a} onUninstall={handleUninstall}></InstallationPage>)
            }
        </div>
    )
}

export default AppList