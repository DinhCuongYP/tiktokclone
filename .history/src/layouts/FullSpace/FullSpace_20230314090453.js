import classNames from 'classnames/bind';
import styles from './FullSpace.module.scss';
const cx = classNames.bind(styles);

function FullSpace() {
    return <div className={cx('wrapper')}></div>;
}

export default FullSpace;
