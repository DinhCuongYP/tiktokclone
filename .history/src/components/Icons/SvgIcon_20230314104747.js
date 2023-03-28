import PropTypes from 'prop-types';
function SvgIcon({ icon, style = {}, size, className, onClick }) {
    return (
        <i className={className} onClick={onClick} style={{ lineHeight: 0, fontSize: size, ...style }}>
            {icon}
        </i>
    );
}

export default SvgIcon;

// "import PropTypes from 'prop-types'" là một câu lệnh trong JavaScript được sử dụng để nhập thư viện PropTypes của React. Thư viện này cung cấp một cách tiêu chuẩn để kiểm tra các kiểu dữ liệu của các thuộc tính (props) được truyền vào trong các component của React. PropTypes sẽ kiểm tra xem các props được truyền vào có đúng kiểu dữ liệu được mong đợi hay không, giúp cho việc phát hiện và sửa lỗi trở nên dễ dàng hơn trong quá trình phát triển ứng dụng React. PropTypes được sử dụng phổ biến trong các ứng dụng React để đảm bảo tính đúng đắn và an toàn của các props được truyền vào trong các component.

// Đây là một component trong React được định nghĩa bằng function component.

// Component này nhận vào một số props như icon, size, style, className, onClick và trả về một đối tượng React để hiển thị biểu tượng (icon). Đối tượng React này là một thẻ <i> (italic) được định nghĩa bởi HTML và sử dụng trong đoạn mã này.

// Trong thẻ <i>, các props được sử dụng để cấu hình các thuộc tính của nó, bao gồm className để định dạng CSS, style để cấu hình các thuộc tính CSS khác như lineHeight và fontSize, và onClick để xử lý sự kiện khi người dùng nhấp chuột.

// Để hiển thị icon, nó được đặt trong nội dung của thẻ <i>. Nội dung này có thể được định nghĩa bởi prop "icon" truyền vào trong component SvgIcon.

// Đây là một ví dụ về cách tạo một component đơn giản trong React và cấu hình các thuộc tính và sự kiện của nó bằng props.
