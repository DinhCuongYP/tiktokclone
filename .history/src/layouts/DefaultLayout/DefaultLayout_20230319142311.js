import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
import Sidebar from '../layoutComponents/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar-container')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>content</div>
            </div>
            <div>DowloadApp</div>
        </div>
    );
}

export default DefaultLayout;
