import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'https://3.254.137.159/api',
    timeout: 20000
})
