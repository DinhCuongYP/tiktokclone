import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_PASE_URL,
});

export const get = async (path, option = {}) => {
    const responsive = await httpRequest.get(path, option);
    return responsive.data;
};

export default httpRequest;
