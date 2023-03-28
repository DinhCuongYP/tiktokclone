import styles from './FollowingLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
const cx = classNames.bind(styles);

function FollowingLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default FollowingLayout;
