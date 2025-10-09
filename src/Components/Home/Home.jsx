import React from 'react'
import Banner from '../Banner/Banner'
import States from '../States/States'
import Apps from '../Apps/Apps'
import { useLoaderData } from 'react-router'


const Home = () => {
  const data = useLoaderData()
  return (
    <div className='max-w-[1500px] mx-auto'>
      <Banner></Banner>
      <States></States>
      <Apps data={data}></Apps>

    </div>
  )
}

export default Home