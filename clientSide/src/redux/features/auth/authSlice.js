import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import auth from '../../services/authService'
import axios, { axiosPrivate } from '../../../axios/axios'

const state = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

export const registerUser = createAsyncThunk('/register-user', async (userData, thunkAPI) => {
    try {
        const response=await axios.post('/api/auth/register/',userData)
        console.log(response);
            return response.data;
    } catch (error) {
        
        const message = error.response?.data?.error || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})


    export const loginUser = createAsyncThunk('/login-user', async (userData, thunkAPI) => {
        try {
            const response=await axios.post('/api/auth/login/',userData)
            console.log(response.data)
            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }



    })


    export const refreshToken = createAsyncThunk('/refresh-token', async (_, thunkAPI) => {
        try {
            const response=await axiosPrivate.get('/api/auth/refresh_token/')
            console.log(response)
            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }



    })




    export const forgetPassword = createAsyncThunk('/forget-password', async (userData, thunkAPI) => {
        try {
            console.log(userData);
            const response=await axiosPrivate.post('/api/auth/forgetpassword/',userData)
            console.log(response);
                return response.data;
        } catch (error) {
            
            const message = error.response?.data?.error || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    
    })


    export const resetPassword = createAsyncThunk('/reset-password', async (userData, thunkAPI) => {
        try {
            console.log(userData);
            const response=await axiosPrivate.post('/api/auth/resetpassword/',userData)
            console.log(response);
                return response.data;
        } catch (error) {
            
            const message = error.response?.data?.error || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    
    })

 

    export const editProfileUser = createAsyncThunk('/editProfile-user', async (userData, thunkAPI) => {
        try {
            const response=await axios.post('/api/userEditProfile/',userData)
                 console.log(response)
                      return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString()
            thunkAPI.rejectWithValue(message)
        }

    })





    export const editProfileCSP = createAsyncThunk('/editProfile-csp', async (userData, thunkAPI) => {
        try {
            const response=await axiosPrivate.post('/api/providerEditProfile/',userData)
                 console.log(response)
                      return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString()
            thunkAPI.rejectWithValue(message)
        }

    })







 

   export  const authSlice = createSlice({
        name: 'auth',
        initialState: state,
        reducers: {
            reset:(state,action)=>{
                state.isSuccess = false
                state.isLoading = false
                state.isError = false
            }

        },
        extraReducers: (builder) => {
            builder.addCase(registerUser.pending, (state) => {
                state.isLoading = true

            }).addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                state.message=action.payload.message
            }).addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

                .addCase(loginUser.pending, (state) => {
                    state.isLoading = true

                }).addCase(loginUser.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=action.payload.message
                    state.user = action.payload
                }).addCase(loginUser.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })




                  .addCase(forgetPassword.pending, (state) => {
                    state.isLoading = true

                }).addCase(forgetPassword.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=action.payload.message
                }).addCase(forgetPassword.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })



                .addCase(resetPassword.pending, (state) => {
                    state.isLoading = true

                }).addCase(resetPassword.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=action.payload.message
                    state.user = action.payload
                }).addCase(resetPassword.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })





                
                .addCase(refreshToken.pending, (state) => {
                    state.isLoading = true

                }).addCase(refreshToken.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=''
                    let {tokens,...elements} = state.user
                    tokens = action.payload
                    state.user = {tokens,...elements}
                }).addCase(refreshToken.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })



                .addCase(editProfileUser.pending, (state) => {
                    state.isLoading = true

                }).addCase(editProfileUser.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
                    state.message=action.payload.message
                }).addCase(editProfileUser.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })


                .addCase(editProfileCSP.pending, (state) => {
                    state.isLoading = true

                }).addCase(editProfileCSP.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
                    state.message=action.payload.message
                }).addCase(editProfileCSP.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })




                
               


             
                

                

        }
    })


    export default authSlice.reducer
    export const {reset}= authSlice.actions

