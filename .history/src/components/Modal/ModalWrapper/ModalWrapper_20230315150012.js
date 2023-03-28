import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
import { WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);

function ModalWrapper({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}></div>
            <WrapperPopper>{children}</WrapperPopper>
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalWrapper;
