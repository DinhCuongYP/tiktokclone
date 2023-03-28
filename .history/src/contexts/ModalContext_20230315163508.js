import { createContext } from 'react';

export const ModalContextKey = createContext();
function ModalContext({ children }) {
    return <ModalContextKey.Provider>{children}</ModalContextKey.Provider>;
}

export default ModalContext;

// createContext là một hàm trong React giúp tạo ra một context mới, cho phép các component con truy cập vào dữ liệu được chia sẻ bởi component cha. Khi sử dụng createContext, ta có thể tạo ra một object context mới, lưu trữ dữ liệu và cung cấp các hàm để cập nhật dữ liệu. Context được truyền từ component cha xuống các component con trong cây component mà không cần truyền qua các component trung gian, giúp việc quản lý state trở nên dễ dàng hơn.
