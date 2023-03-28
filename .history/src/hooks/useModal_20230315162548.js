import { useState } from 'react';
import { createPortal } from 'react-dom';

function useModal(ModalComponent) {
    const [isShow, setIsShow] = useState(false);

    const modalShow = () => {
        setIsShow(true);
        document.body.classList.add('hidden', 'modal');
    };

    const modalHide = () => {
        setIsShow(false);
        document.body.classList.remove('hidden', 'modal');
    };

    const ModalExport = () => {
        return isShow && createPortal(<ModalComponent handleClose={modalHide} />, document.body);
    };
    return [ModalExport, modalShow];
}

export default useModal;

// createPortal là một hàm của React cho phép bạn render một thành phần React bên trong một phần tử DOM nằm bên ngoài cây thành phần hiện tại của ứng dụng.

// Ví dụ, nếu bạn muốn hiển thị một modal trong ứng dụng React của mình, bạn có thể sử dụng createPortal để render thành phần modal này bên trong một phần tử DOM nằm bên ngoài cây thành phần hiện tại. Điều này giúp cho modal được hiển thị bên trên các thành phần khác của trang web mà không bị ảnh hưởng bởi cấu trúc của chúng.
