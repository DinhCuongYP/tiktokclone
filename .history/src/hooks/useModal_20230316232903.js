import { useState } from 'react';
import { createPortal } from 'react-dom';

function useModal(ModalComponent) {
    const [isShow, setIsShow] = useState(false);

    const modalShow = () => {
        setIsShow(true);
        document.body.classList.add('hidden', 'modal');
    };

    const modalHide = () => {
        console.log('Aloo');
        setIsShow(false);
        document.body.classList.remove('hidden', 'modal');
    };

    const ModalExport = () => {
        return isShow && createPortal(<ModalComponent aaaaa={modalHide} />, document.body);
    };

    return [ModalExport, modalShow];
}

export default useModal;

// createPortal là một hàm của React cho phép bạn render một thành phần React bên trong một phần tử DOM nằm bên ngoài cây thành phần hiện tại của ứng dụng.

// Ví dụ, nếu bạn muốn hiển thị một modal trong ứng dụng React của mình, bạn có thể sử dụng createPortal để render thành phần modal này bên trong một phần tử DOM nằm bên ngoài cây thành phần hiện tại. Điều này giúp cho modal được hiển thị bên trên các thành phần khác của trang web mà không bị ảnh hưởng bởi cấu trúc của chúng.
//
// Cú pháp sử dụng của createPortal như sau:
//
// ReactDOM.createPortal(child, container)
// Trong đó:

// child: là một đối tượng React element để render.
// container: là một phần tử DOM mà child sẽ được render bên trong.
// Vì createPortal được sử dụng để render các thành phần React bên ngoài cây thành phần hiện tại của ứng dụng, bạn cần đảm bảo rằng phần tử container đã tồn tại trong DOM trước khi gọi createPortal.

// ------
// Đây là một custom hook trong React, được sử dụng để quản lý trạng thái hiển thị của một cửa sổ modal và cung cấp các phương thức để hiển thị và ẩn nó.

// Trong đoạn mã này, hook useModal nhận đầu vào là một ModalComponent, đại diện cho thành phần cửa sổ modal cần hiển thị. Hook này sử dụng useState để quản lý trạng thái hiển thị của cửa sổ modal, được lưu trữ trong biến isShow. Khi giá trị của biến isShow thay đổi, hook sẽ tự động render lại ModalComponent để hiển thị hoặc ẩn cửa sổ modal tương ứng.

// Các phương thức modalShow và modalHide được sử dụng để hiển thị và ẩn cửa sổ modal. Khi modalShow được gọi, giá trị của biến isShow sẽ được đặt là true và body của trang web sẽ được thêm các lớp CSS "hidden" và "modal" để ngăn người dùng cuộn trang khi cửa sổ modal được hiển thị. Ngược lại, khi modalHide được gọi, giá trị của biến isShow sẽ được đặt là false và các lớp CSS "hidden" và "modal" sẽ được xóa bỏ.

// Phương thức ModalExport được sử dụng để hiển thị cửa sổ modal, bằng cách sử dụng hàm createPortal của React để render ModalComponent bên trong một phần tử nằm ngoài cây DOM của thành phần gốc (thường là phần tử body). Điều này giúp cho cửa sổ modal có thể hiển thị bên trên các thành phần khác của trang web mà không bị ảnh hưởng bởi cấu trúc của chúng. Cuối cùng, hook useModal trả về một mảng gồm hai giá trị, bao gồm ModalExport và modalShow, cho phép các thành phần khác sử dụng hook này để hiển thị cửa sổ modal.
