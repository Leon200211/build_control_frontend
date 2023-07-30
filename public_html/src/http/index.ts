import axios from 'axios';

const API_URL = `http://u1988986.isp.regruhosting.ru/`


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

// export default $api;
export default API_URL;