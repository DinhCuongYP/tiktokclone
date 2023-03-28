import classNames from 'classnames/bind';
import styles from './WrapperPopper.module.scss';
const cx = classNames.bind(styles);

function WrapperPopper({ children, className }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperPopper;
