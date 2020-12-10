import axios from "axios"


export default axios.create({
    baseUrl: "https://fakestoreapi.com",
    responseType: "json",
    headers: {
        "TAI-Sub-Key": "https://fakestoreapi.com"
    }
})