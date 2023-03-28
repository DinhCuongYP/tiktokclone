import styles from './FollowingLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function FollowingLayout({ children }) {
    return <div className={cx('wrapper')}></div>;
}

export default FollowingLayout;
