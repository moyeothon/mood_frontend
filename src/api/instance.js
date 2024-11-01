import axios from "axios";

const instance = axios.create( {
    baseURL: 'https://mood9.shop',
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
})


export default instance;
