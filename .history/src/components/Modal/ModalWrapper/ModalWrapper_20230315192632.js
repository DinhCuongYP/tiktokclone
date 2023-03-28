import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
import { WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);

function ModalWrapper({ children, className, isClose, onClose, animateEnd = 'hide-effect-default' }) {
    const handleAnimateEnd = () => {
        isClose && onClose();
    };
    return (
        <div className={cx('wrapper', { [animateEnd]: isClose })}>
            <div className={cx('overlay')} onAnimateEnd={handleAnimateEnd}></div>
            <WrapperPopper className={cx('content', className)}>{children}</WrapperPopper>
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalWrapper;

// Đây là một function component trong React, định nghĩa một modal wrapper có chức năng hiển thị một component con bên trong nó. ModalWrapper sử dụng các props để tùy chỉnh giao diện và hành vi của modal.

// Cụ thể, function ModalWrapper sử dụng các thư viện sau đây:

// PropTypes được import từ thư viện prop-types để kiểm tra kiểu dữ liệu của các props truyền vào và đảm bảo rằng các props đó đúng kiểu.
// classNames được import từ thư viện classnames/bind để quản lý các class CSS của các element được sử dụng trong ModalWrapper.
// styles được import từ file ModalWrapper.module.scss để sử dụng các class CSS được định nghĩa trong đó.
// Function ModalWrapper nhận các props sau:

// children là một node bắt buộc, đại diện cho nội dung của modal.
// className là một chuỗi, cho phép tùy chỉnh các class CSS của ModalWrapper.
// isClose là một boolean, cho biết modal đang được đóng hay không.
// onClose là một callback function, được gọi khi modal bị đóng.
// animateEnd là một chuỗi, xác định hiệu ứng animation của modal khi nó được mở hoặc đóng.
// Function ModalWrapper trả về một đoạn mã JSX để hiển thị modal. Trong đó, WrapperPopper là một component được import từ ~/components/Popper và đại diện cho nội dung chính của modal. ModalWrapper sử dụng các class CSS và các props được truyền vào để tạo ra giao diện và hành vi của modal
