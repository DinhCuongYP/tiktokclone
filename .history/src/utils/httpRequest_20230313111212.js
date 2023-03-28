import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_PASE_URL,
});

export const get = async (path, option = {}) => {
    try {
        const responsive = await request.get(path, option);
        return responsive.data;
    } catch (error) {
        console.log(error);
    }
};

export default request;
