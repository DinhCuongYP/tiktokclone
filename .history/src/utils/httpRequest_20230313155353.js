import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    try {
        const reponsive = await httpRequest.get(path, option);
        return reponsive.data;
    } catch (error) {
        console.log(error);
    }
};

export default httpRequest;
