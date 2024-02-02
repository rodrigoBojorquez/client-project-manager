import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://localhost:8000/project-manager/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})


export default axiosClient