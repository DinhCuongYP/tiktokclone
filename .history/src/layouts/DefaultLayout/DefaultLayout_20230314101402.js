import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>Header</header>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>Sidebar</div>
                <div className={cx('content')}>content</div>
            </div>
            <div>DowloadApp</div>
        </div>
    );
}

export default DefaultLayout;
