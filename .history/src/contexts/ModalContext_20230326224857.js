import { createContext, useRef } from 'react';
import { DownloadMobileModal, KeyBoardModal, LoginModal } from '~/components/Modal';
import useModal from '~/hooks/useModal';

export const ModalContextKey = createContext();

function ModalContext({ children }) {
    const [LoginModalComponent, loginModalShow] = useModal(LoginModal);
    const [KeyBoardComponent, keyboardShow] = useModal(KeyBoardModal);
    const [DownloadMobileComponent, downloadMobileShow] = useModal(DownloadMobileModal);
    const contextValue = useRef({ loginModalShow, keyboardShow, downloadMobileShow });
    return (
        <ModalContextKey.Provider value={contextValue.current}>
            {children}
            <LoginModalComponent />
            <KeyBoardComponent />
            <DownloadMobileComponent />
        </ModalContextKey.Provider>
    );
}

export default ModalContext;
// createContext là một hàm trong React giúp tạo ra một context mới, cho phép các component con truy cập vào dữ liệu được chia sẻ bởi component cha. Khi sử dụng createContext, ta có thể tạo ra một object context mới, lưu trữ dữ liệu và cung cấp các hàm để cập nhật dữ liệu. Context được truyền từ component cha xuống các component con trong cây component mà không cần truyền qua các component trung gian, giúp việc quản lý state trở nên dễ dàng hơn.

// Trong React, context là một cơ chế để truyền dữ liệu giữa các thành phần của cây thành phần mà không cần thông qua các thành phần trung gian. Khi một giá trị được đặt trong context, nó có thể được truy cập từ bất kỳ thành phần con nào của nó.

// Context là một đối tượng trong React cung cấp một cách để chia sẻ dữ liệu giữa các thành phần mà không cần truyền giá trị qua nhiều cấp. Nó được sử dụng để truyền dữ liệu từ "một thành phần cha" tới "nhiều thành phần con" mà không cần thông qua các thành phần trung gian. Bằng cách sử dụng context, ta có thể giảm thiểu sự phụ thuộc giữa các thành phần và giúp cho mã nguồn trở nên dễ bảo trì hơn.
