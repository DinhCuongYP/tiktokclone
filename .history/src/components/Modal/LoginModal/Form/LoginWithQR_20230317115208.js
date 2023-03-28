import classNames from 'classnames/bind';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithQR() {
    return <div className={cx('loginQR-wrapper')}></div>;
}

export default LoginWithQR;
