import BorderTopContainer from '~/components/BorderTopContainer';
import classNames from 'classnames/bind';
import styles from './LoginNotify.module.scss';
const cx = classNames.bind(styles);

function LoginNotify() {
    return (
        <BorderTopContainer className={cx('login-notify')}>
            <p className={cx('text')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
        </BorderTopContainer>
    );
}

export default LoginNotify;
