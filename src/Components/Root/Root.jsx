import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div className='bg-white max-w-[1500px] mx-auto'>

            <NavBar></NavBar>

            {navigation.state === 'loading' && <Loader></Loader>}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root