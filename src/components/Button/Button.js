import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    children,
    className,
    upload,
    login,
    href,
    to,
    iconClassname,
    textClassname,
    leftIcon,
    rightIcon,
    disable,
    ...props
}) {
    let Component = 'button';

    if (href) {
        Component = 'a';
    } else if (to) {
        Component = Link;
    }

    //

    disable &&
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });

    //

    const btnProps = {
        href,
        to,
        ...props,
    };

    const classNames = cx('btn', {
        upload,
        login,
        disable,
        [className]: className,
    });

    const iconClassnames = cx('icon', {
        [iconClassname]: iconClassname,
    });

    const textClassnames = cx('text', {
        [textClassname]: textClassname,
    });
    return (
        <Component {...btnProps} className={classNames}>
            {leftIcon && <span className={iconClassnames}>{leftIcon}</span>}
            <span className={textClassnames}>{children}</span>
            {rightIcon && <span className={iconClassnames}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    upload: PropTypes.bool,
    login: PropTypes.bool,
    disable: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    iconClassname: PropTypes.string,
    textClassname: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;

// --------------------------------------------------------

// Đây là một component Button được viết bằng React.

// Các props của component này bao gồm:

// children: Nội dung hiển thị bên trong Button.
// className: Tên class CSS để customize Button.
// upload: Boolean, có áp dụng class upload hay không.
// login: Boolean, có áp dụng class login hay không.
// href: Nếu có giá trị thì Button sẽ được render ra dưới dạng thẻ <a>, với href là giá trị của prop này.
// to: Nếu có giá trị thì Button sẽ được render ra dưới dạng thẻ <Link> từ react-router-dom, với to là giá trị của prop này.
// iconClassname: Tên class CSS để customize icon của Button.
// textClassname: Tên class CSS để customize nội dung chữ của Button.
// leftIcon: Nội dung hiển thị bên trái nội dung chữ của Button.
// rightIcon: Nội dung hiển thị bên phải nội dung chữ của Button.
// Các props đều có kiểu dữ liệu và giá trị mặc định (nếu có) được xác định bằng PropTypes.
