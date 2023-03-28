import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('text-login')}>Đăng nhập để follow các tác giả, thích video và xem bình luận. </p>
            <Button loginSidebar>Đăng nhập</Button>
        </div>
    );
}

export default Login;
