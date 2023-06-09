import styles from './FollowingLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
import Sidebar from '../layoutComponents/Sidebar';
import DowloadApp from '~/components/DowloadApp';
const cx = classNames.bind(styles);

function FollowingLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
                <DowloadApp />
            </div>
        </div>
    );
}

export default FollowingLayout;
