import classNames from 'classnames/bind';
import { LoginModal } from '~/components/Modal';
// import Header from '../layoutComponents/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        // <div className={cx('wrapper')}>
        //     <Header />
        //     <div className={cx('container')}>
        //         <div className={cx('sidebar')}>Sidebar</div>
        //         <div className={cx('content')}>content</div>
        //     </div>
        //     <div>DowloadApp</div>
        // </div>
        <div className={cx('wrapper')}>
            <LoginModal />
        </div>
    );
}

export default DefaultLayout;
