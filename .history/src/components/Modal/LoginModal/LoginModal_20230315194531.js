import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
const cx = classNames.bind(styles);
function LoginModal() {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <button>
                <SvgIcon />
            </button>
            <button>
                <SvgIcon />
            </button>
        </ModalWrapper>
    );
}

export default LoginModal;
