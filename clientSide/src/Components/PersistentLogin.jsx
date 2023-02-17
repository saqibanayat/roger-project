import React from 'react'
import { Outlet } from 'react-router-dom'
import setupInterceptor from '../axios/Interceptor'
import store from '../redux/store/store'

const PersistentLogin = () => {
setupInterceptor(store)
  return (
   <>
   <Outlet />
   </>
  )
}

export default PersistentLogin