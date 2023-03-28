import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const reponsive = await httpRequest.get(path, option);
    return reponsive.data;
};

export default httpRequest;
