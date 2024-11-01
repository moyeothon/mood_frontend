import axios from "axios";

const instance = axios.create( {
    baseURL: 'https://mood9.shop',
    timeout:1000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
