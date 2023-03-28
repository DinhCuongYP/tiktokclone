import axios from 'axios';

const httpRequest = async (path, options) => {
    const reponsive = await httpRequest.get(path, options);
    return reponsive.data;
};

export default httpRequest;
