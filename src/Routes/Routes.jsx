import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import ErrorPages from '../Components/ErrorPages/ErrorPages';
import Home from '../Components/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
   Component : Root ,
   errorElement : <ErrorPages></ErrorPages>,
   children : [
    {
        indsex:true,
        path : "/",
        Component : Home

    }
   ]

  },
]);




