import classNames from 'classnames/bind';
import styles from './WrapperPopper.module.scss';
const cx = classNames.bind(styles);

function WrapperPopper({ children, className }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperPopper;

// /Đây là một component React được định nghĩa trong file WrapperPopper.js. Nó được sử dụng để tạo ra một container bao bọc các phần tử con trong một Popper, một component của thư viện Material-UI được sử dụng để tạo các popover, tooltip, dropdown menu, v.v. trong ứng dụng React.

// Trong component WrapperPopper, classNames được sử dụng để tạo ra các class name dựa trên các module CSS được import vào thông qua import styles from './WrapperPopper.module.scss';. Các class name này sẽ được áp dụng cho các phần tử trong component WrapperPopper. children là một prop được truyền vào để chứa các phần tử con của WrapperPopper. className là một prop khác được sử dụng để cung cấp các class name tùy chỉnh cho container bọc.
