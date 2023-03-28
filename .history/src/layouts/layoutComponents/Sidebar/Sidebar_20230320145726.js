import classNames from 'classnames/bind';
import LoginNotify from './LoginNotify';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <div className={cx('content')}>
                    <Navigation />
                    <LoginNotify />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
