import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowLeft, iconCloseX } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);
function LoginModal() {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <button>
                <SvgIcon icon={iconCloseX} />
            </button>
            <button>
                <SvgIcon icon={iconArrowLeft} />
            </button>
            <h1>ALOOOOOO</h1>
        </ModalWrapper>
    );
}

export default LoginModal;
