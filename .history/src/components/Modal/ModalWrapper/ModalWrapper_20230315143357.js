import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
const cx = classNames.bind(styles);

function ModalWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default ModalWrapper;
