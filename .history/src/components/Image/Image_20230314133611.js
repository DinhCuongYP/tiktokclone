import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import image from '~/assets/image';
const cx = classNames.bind(styles);

const Image = forwardRef(function (
    { className, fallback: customFallback = image.noImage, src, alt = '', ...props },
    REF,
) {
    const [error, setError] = useState(false);
    const handleError = () => {
        setError(customFallback);
    };
    return (
        <img
            src={error || src}
            alt={alt}
            className={cx('img', { [className]: className })}
            ref={REF}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    fallback: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;

// Trong React, "forwardRef" là một API được sử dụng để chuyển tiếp (forward) các refs từ một component cha xuống một component con bên trong nó.

// Khi bạn tạo một component con và muốn truy cập trực tiếp đến các phần tử DOM của nó thông qua refs, bạn có thể sử dụng forwardRef để chuyển tiếp refs từ component cha xuống cho component con

// Khi bạn sử dụng forwardRef, bạn sẽ cần truyền một function component vào làm đối số đầu tiên của forwardRef. Function component này sẽ nhận vào hai đối số: props và ref. Bên trong function component này, bạn có thể trả về một React element, tương tự như cách bạn tạo một component thông thường.

// Đối số thứ hai của forwardRef là một ref, mà bạn có thể chuyển tiếp từ component cha xuống cho component con. Ví dụ, trong component cha, bạn có thể tạo một ref bằng cách sử dụng useRef và truyền nó vào component con thông qua props. Component con có thể sử dụng ref này để truy cập các phần tử DOM bên trong nó.

// forwardRef là một công cụ hữu ích để tạo các component chứa các phần tử DOM như input, select, textarea, v.v. mà bạn cần truy cập trực tiếp từ component cha.

// Đây là một đoạn mã React để tạo một component hình ảnh (Image).

// Cụ thể, đoạn mã này sử dụng forwardRef để truyền tham chiếu (ref) cho phần tử img.

// Đoạn mã này có các thuộc tính (props) như sau:

// className: tên class cho phần tử img.
// fallback: URL của hình ảnh sẽ được hiển thị nếu hình ảnh chính không thể tải được.
// src: URL của hình ảnh chính.
// alt: văn bản thay thế được hiển thị khi hình ảnh không hiển thị được.
// Trong đó, classNames được sử dụng để tạo ra một tập hợp các tên class cho phần tử img dựa trên các đối số được truyền vào. Đối tượng styles được import từ file CSS module Image.module.scss, được sử dụng để xác định các tên class cụ thể. Đối số className được truyền vào để cho phép định nghĩa thêm tên class khác trong file sử dụng component này.

// Trạng thái error được sử dụng để theo dõi trạng thái tải hình ảnh. Nếu hình ảnh chính không thể tải được, trạng thái error sẽ được đặt thành true và hình ảnh thay thế sẽ được hiển thị.

// Cuối cùng, đoạn mã này cũng định nghĩa các giá trị mặc định và kiểu dữ liệu cho các thuộc tính (props) của component Image bằng cách sử dụng propTypes.
