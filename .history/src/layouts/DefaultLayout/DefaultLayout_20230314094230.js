import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <div>Header</div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>Sidebar</div>
                <div className={cx('content')}>content</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
