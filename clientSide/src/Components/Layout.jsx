import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../screens/NavBar/Navbar'
import Footer from '../screens/Footer/Footer'

const Layout = () => {


  return (
    <>
       <Navbar/>
       <Outlet/>
       <Footer />
       </>
  )
}

export default Layout