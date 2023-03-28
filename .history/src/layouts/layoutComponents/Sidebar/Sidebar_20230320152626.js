import classNames from 'classnames/bind';
import LoginNotify from './LoginNotify';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';
import SuggestedAccount from './SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <div className={cx('content')}>
                    <Navigation />
                    <LoginNotify />
                    <SuggestedAccount />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
