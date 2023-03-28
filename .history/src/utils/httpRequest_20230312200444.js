import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options) => {
    const reponsive = await httpRequest.get(path, options);
    return reponsive.data;
};

export default httpRequest;
