import authReducer from '../features/auth/authSlice'
import packagesReducer from '../features/packages/packagesSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({

    reducer:{
    auth:authReducer,
   packages:packagesReducer
    }
})

export default store
