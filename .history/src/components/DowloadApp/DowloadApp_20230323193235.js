import classNames from 'classnames/bind';
import styles from './DowloadApp.module.scss';
import Button from '../Button';
import { useState } from 'react';
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
                <Button className={cx('main-down-btn')} upload>
                    Tải ứng dụng
                </Button>
            </div>
            <p className={cx('scroll-to-top')}></p>
        </div>
    );
}

export default DowloadApp;
