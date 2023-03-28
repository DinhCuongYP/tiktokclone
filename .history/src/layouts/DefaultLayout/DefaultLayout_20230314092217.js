import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <h1>Header</h1>
            <div className={cx('container')}>
                <h2>Sidebar</h2>
                <h2>Content</h2>
            </div>
        </div>
    );
}

export default DefaultLayout;
