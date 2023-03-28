import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
const cx = classNames.bind(styles);
function LoginModal() {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <button></button>
            <button></button>
        </ModalWrapper>
    );
}

export default LoginModal;
