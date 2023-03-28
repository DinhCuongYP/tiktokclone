import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
import { WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);

function ModalWrapper({ children, className, isClose, onClose, animateEnd = 'hide-effect-default' }) {
    const handleAnimateEnd = () => {
        isClose && onClose();
        console.log(isClose);
    };

    return (
        <div className={cx('wrapper', { [animateEnd]: isClose })}>
            <div className={cx('overlay')} onAnimationEnd={handleAnimateEnd}></div>
            <WrapperPopper className={cx('content', className)}>{children}</WrapperPopper>
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalWrapper;
