import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_PASE_URL,
});

export const get = async (path, option = {}) => {
    const responsive = httpRequest.get(path, option);
    return (await responsive).data;
};

export default httpRequest;
