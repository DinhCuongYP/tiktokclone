import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_PASE_URL,
});

export const get = async (path, option = {}) => {
    const responsive = await request.get(path, option);
    return responsive.data;
};

export default request;
