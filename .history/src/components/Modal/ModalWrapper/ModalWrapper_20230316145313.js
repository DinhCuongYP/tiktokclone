import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
import { WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);

function ModalWrapper({ children, className, isClose, onClose, animate = 'hide-effect-default' }) {
    const handleCloseAnimateEnd = () => {
        isClose && onClose();
    };

    return (
        <div className={cx('wrapper', { [animate]: isClose })}>
            <div className={cx('overlay')} onAnimationEnd={handleCloseAnimateEnd}></div>
            <WrapperPopper className={cx('content', className)}>{children}</WrapperPopper>
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalWrapper;
