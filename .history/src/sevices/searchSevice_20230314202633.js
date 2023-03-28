import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    const res = await httpRequest.get('users/search?', {
        params: {
            q,
            type,
        },
    });

    return res.data;
};

// Đây là một hàm search được export ra từ module này. Hàm này thực hiện một yêu cầu HTTP GET đến API của ứng dụng để tìm kiếm người dùng (users) với một query string q được truyền vào. Ngoài ra, hàm này còn cho phép truyền một tham số type, mặc định là 'less'. Kết quả của yêu cầu GET được trả về dưới dạng dữ liệu JSON được giải mã bởi Axios và được trả về như một đối tượng JavaScript.
