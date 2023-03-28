import classNames from 'classnames/bind';
import DowloadApp from '~/components/DowloadApp';
import Header from '../layoutComponents/Header';
import Sidebar from '../layoutComponents/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
            <DowloadApp />
        </div>
    );
}

export default DefaultLayout;
