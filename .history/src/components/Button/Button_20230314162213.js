import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ children, className, upload, login }) {
    let Component = 'button';

    if (href) {
        Component = 'a';
    } else if (to) {
        Component = Link;
    }

    const classNames = cx('btn', {
        upload,
        login,
    });
    return <button className={classNames}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    upload: PropTypes.bool,
    login: PropTypes.bool,
};

export default Button;
