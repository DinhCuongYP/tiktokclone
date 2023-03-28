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
        <CustomScrollbar
            hideTracksWhenNotNeeded
            autoHide={hideScrollbar}
            autoHideTimeout={0}
            renderView={customScrollbar('scrollbar-view')}
            renderTrackVertical={customScrollbar('scrollbar-track')}
            renderThumbVertical={customScrollbar('scrollbar-thumb')}
            onMouseEnter={() => setHideScrollbar(false)}
            onMouseLeave={() => setHideScrollbar(false)}
        >
            <div className={cx('wrapper')}>
                <div className={cx('inner-fixed')}>
                    <div className={cx('content')}>
                        <Navigation />
                        <LoginNotify />
                        <SuggestedAccount />
                    </div>
                </div>
            </div>
        </CustomScrollbar>
    );
}

export default Sidebar;
