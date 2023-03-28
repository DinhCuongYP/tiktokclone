import classNames from 'classnames/bind';
import styles from './DowloadApp.module.scss';
import Button from '../Button';
import { useState } from 'react';
import SvgIcon from '../Icons/SvgIcon';
import { iconArrowToBot2, iconArrowToTop } from '../Icons/Icons';
const cx = classNames.bind(styles);

function DowloadApp() {
    const [showIconScroll, setShowIconScroll] = useState(false);
    return (
        <div
            className={cx('wrapper', {
                'show-icon-scroll': showIconScroll,
            })}
        >
            <div className={cx('download-app')}>
                <Button className={cx('main-down-btn')}>Tải ứng dụng</Button>
            </div>
            <p className={cx('scroll-to-top')}>
                <SvgIcon icon={iconArrowToTop} className={cx('icon-scroll')} />
            </p>
        </div>
    );
}

export default DowloadApp;
