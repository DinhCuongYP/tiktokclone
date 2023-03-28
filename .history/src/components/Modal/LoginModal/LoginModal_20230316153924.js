import { WrapperPopper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
const cx = classNames.bind(styles);

function LoginModal({ handleCloseModal }) {
    return <WrapperPopper></WrapperPopper>;
}

export default LoginModal;
