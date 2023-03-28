import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ children, className, upload }) {
    const classNames = cx('btn', {
        upload,
    });
    return <button className={classNames}>{children}</button>;
}

export default Button;
