import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://3.254.137.159/api',
    // baseURL: 'ec2-3-254-137-159.eu-west-1.compute.amazonaws.com',
    timeout: 20000
})
