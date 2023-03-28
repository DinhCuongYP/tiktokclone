import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowLeft, iconCloseX } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);
function LoginModal() {
    return (
        <ModalWrapper className={cx('wrapper')}>
            {/* Icon header */}
            <button>
                <SvgIcon icon={iconCloseX} />
            </button>
            <button>
                <SvgIcon icon={iconArrowLeft} />
            </button>

            {/* Body */}
            <section></section>
        </ModalWrapper>
    );
}

export default LoginModal;
