import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_PASE_URL,
});
