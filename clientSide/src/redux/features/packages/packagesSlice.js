import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import auth from '../../services/authService'
import axios, { axiosPrivate } from '../../../axios/axios'

const state = {
    packages: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',

}





    export const showPackages = createAsyncThunk('/show-Packages', async (_, thunkAPI) => {
        // console.log(userData)
        try {
            const response=await axios.get('/api/showPackages/')

            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }

    })


    export const attributeList = createAsyncThunk('/attribute-list', async (_, thunkAPI) => {
      
        try {
            const response=await axios.get('/api/showAttributes/')
           
            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }



    })


    
    export const addFilterPackages = createAsyncThunk('/addFilterPackages', async (userData, thunkAPI) => {
      
        try {
            const response=await axios.post('/api/addFilterPackages/',userData)
           
            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }



    })


    





    export const cspDashboard = createAsyncThunk('/cspDashboard', async (userData, thunkAPI) => {
        console.log(userData)
        try {
            const response=await axiosPrivate.post('/api/packageAdd/',userData)
            console.log(response)
            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }

    })





   export  const packagesSlice = createSlice({
        name: 'packages',
        initialState: state,
        reducers: {
            reset:(state,action)=>{
                state.isSuccess = false
                state.isLoading = false
                state.isError = false
            }

        },
        extraReducers: (builder) => {
            builder.addCase(showPackages.pending, (state) => {
                    state.isLoading = true

                }).addCase(showPackages.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=''
                    let packages = action.payload
                    // if(state?.packages?.attributes){state.packages = {...state.packages,packages:packages}}
                    state.packages = {...state?.packages,packages:packages}
                    

                }).addCase(showPackages.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.packages = null
                })



                .addCase(cspDashboard.pending, (state) => {
                    state.isLoading = true

                }).addCase(cspDashboard.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=action.payload.message
                }).addCase(cspDashboard.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.packages = null
                })



                .addCase(attributeList.pending, (state) => {
                    state.isLoading = true

                }).addCase(attributeList.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    let attributes = action.payload
                    // if(state?.packages?.packages){state.packages = {...state.packages,attributes:attributes}}
                    state.packages = {...state?.packages,attributes:attributes}
                   
                }).addCase(attributeList.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.packages = []
                })



                .addCase(addFilterPackages.pending, (state) => {
                    state.isLoading = true

                }).addCase(addFilterPackages.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    let filterPackages = action.payload
                    // if(state?.packages?.packages){state.packages = {...state.packages,attributes:attributes}}
                    state.packages = {...state?.packages,filterPackages:filterPackages}
                   
                }).addCase(addFilterPackages.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.packages = []
                })




                

                

        }
    })


    export default packagesSlice.reducer
    export const {reset}= packagesSlice.actions

