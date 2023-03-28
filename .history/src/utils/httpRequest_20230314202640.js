import axios from 'axios';

//  được sử dụng để tạo các yêu cầu HTTP đến một URL cơ sở (base URL) được chỉ định. Các yêu cầu HTTP này có thể được sử dụng để lấy dữ liệu từ máy chủ hoặc cập nhật dữ liệu trên máy chủ. -> Oke
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
