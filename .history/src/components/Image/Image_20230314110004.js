import { forwardRef } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);

function Image() {
    return (  );
}

export default Image;

// Trong React, "forwardRef" là một API được sử dụng để chuyển tiếp (forward) các refs từ một component cha xuống một component con bên trong nó.

// Khi bạn tạo một component con và muốn truy cập trực tiếp đến các phần tử DOM của nó thông qua refs, bạn có thể sử dụng forwardRef để chuyển tiếp refs từ component cha xuống cho component con

// Khi bạn sử dụng forwardRef, bạn sẽ cần truyền một function component vào làm đối số đầu tiên của forwardRef. Function component này sẽ nhận vào hai đối số: props và ref. Bên trong function component này, bạn có thể trả về một React element, tương tự như cách bạn tạo một component thông thường.

// Đối số thứ hai của forwardRef là một ref, mà bạn có thể chuyển tiếp từ component cha xuống cho component con. Ví dụ, trong component cha, bạn có thể tạo một ref bằng cách sử dụng useRef và truyền nó vào component con thông qua props. Component con có thể sử dụng ref này để truy cập các phần tử DOM bên trong nó.

// forwardRef là một công cụ hữu ích để tạo các component chứa các phần tử DOM như input, select, textarea, v.v. mà bạn cần truy cập trực tiếp từ component cha.