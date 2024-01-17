import axios from "axios";

export const api = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'https://masonryfixingsprojects.com/api',
    timeout: 20000,
})
