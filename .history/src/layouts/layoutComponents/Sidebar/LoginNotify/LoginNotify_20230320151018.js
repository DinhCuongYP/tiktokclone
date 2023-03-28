import BorderTopContainer from '~/components/BorderTopContainer';
import classNames from 'classnames/bind';
import styles from './LoginNotify.module.scss';
import Button from '~/components/Button';
import { useContext } from 'react';
import { ModalContextKey } from '~/contexts/ModalContext';
const cx = classNames.bind(styles);

function LoginNotify() {
    const { loginModalShow } = useContext(ModalContextKey);

    return (
        <BorderTopContainer className={cx('login-notify')}>
            <p className={cx('text')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button onClick={loginModalShow} className={cx('btn-login')} upload>
                Đăng Nhập
            </Button>
        </BorderTopContainer>
    );
}

export default LoginNotify;
