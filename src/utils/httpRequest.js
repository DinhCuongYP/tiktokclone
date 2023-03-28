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

// Đây là một module trong ứng dụng React sử dụng thư viện axios để tạo các yêu cầu HTTP đến một URL cơ sở được chỉ định.

// Đoạn mã sử dụng hàm create() của axios để tạo một đối tượng httpRequest, chứa cấu hình cơ bản cho các yêu cầu HTTP. baseURL được đặt bằng giá trị của biến môi trường REACT_APP_BASE_URL, giúp xác định URL cơ sở của máy chủ để gửi yêu cầu HTTP.
// Hàm get() được xuất ra ngoài module để sử dụng cho các yêu cầu HTTP phương thức GET. Tham số đầu vào của hàm bao gồm path (đường dẫn tương đối của API cần gọi) và option (các tùy chọn tùy chọn cho yêu cầu HTTP). Hàm này trả về một promise, sử dụng await để đợi cho phản hồi từ máy chủ trả về và trả về dữ liệu được trả về bởi phản hồi HTTP thông qua thuộc tính 'data' của đối tượng phản hồi.
// Đối tượng httpRequest được xuất ra ngoài module để sử dụng cho các yêu cầu HTTP khác (như POST, PUT, DELETE, vv.) bên ngoài module này.
