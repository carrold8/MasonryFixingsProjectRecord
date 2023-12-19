import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:8080/api',
    // baseURL: 'http://3.254.137.159/api',
    baseURL: 'https://masonryfixingsprojects.com/api',
    timeout: 20000
})
