import axios from 'axios'

// {For simple request to backend server}
export default axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true,
    headers:
    {
        'Content-Type':'application/json'
    }
})



// {For admin request to backend server including Token }

export const axiosPrivate = axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true,
    headers:
    {
        'Content-Type':'application/json'
    }
})
