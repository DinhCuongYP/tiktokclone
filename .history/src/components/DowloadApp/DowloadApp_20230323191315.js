import classNames from 'classnames/bind';
import styles from './DowloadApp.module.scss';
import Button from '../Button';
const cx = classNames.bind(styles);

function DowloadApp() {
    return (
        <div className={cx('wrapper')}>
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
