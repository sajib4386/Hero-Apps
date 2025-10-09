import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import ErrorPages from '../Components/ErrorPages/ErrorPages';
import Home from '../Components/Home/Home';
import AllApps from '../Components/AllApps/AllApps';
import AppDetails from '../Components/AppDetails/AppDetails';
import AppList from '../Components/AppList/AppList';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                index: true,
                loader: () => fetch('/appsData.json'),
                path: "/",
                Component: Home

            },

            {
                path: "/allApps",
                loader: () => fetch('/allAppsData.json'),
                Component: AllApps
            },

            {
                path: "/appDetails/:id",
                loader: () => fetch('/allAppsData.json'),
                Component: AppDetails
            },

            {
                path: "/appList",
                loader: () => fetch('/allAppsData.json'),
                Component: AppList
            }
        ]

    },
]);




