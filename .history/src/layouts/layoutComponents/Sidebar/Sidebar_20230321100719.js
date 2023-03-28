import classNames from 'classnames/bind';
import { useState } from 'react';
import LoginNotify from './LoginNotify';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';
import SuggestedAccount from './SuggestedAccount';
import { Scrollbars as CustomScrollbar } from 'react-custom-scrollbars-2';

const cx = classNames.bind(styles);

function Sidebar() {
    const [hideScrollbar, setHideScrollbar] = useState(true);
    const customScrollbar = (classname) => {
        return (props) => <div className={cx(classname)} {...props}></div>;
    };
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
