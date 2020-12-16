import axios from "axios"



export default axios.create({
    baseURL: process.env.REACT_APP_API,
    responseType: "json",
    params: {
        key: process.env.REACT_APP_KEY
    } 
})