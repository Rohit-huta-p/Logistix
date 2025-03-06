import axios from "axios";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://logistix-backend.onrender.com/api/",

    
})
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers
    }
    return config;
    }, (error) => {
    return Promise.reject(error);
    });

export default axiosInstance;
