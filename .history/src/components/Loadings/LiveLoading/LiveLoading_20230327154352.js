import classNames from 'classnames/bind';
import styles from './LiveLoading.module.scss';

const cx = classNames.bind(styles);

function LiveLoading() {
    return (
        <div className={cx('live-loading')}>
            <p className={cx('loading_view')}></p>
            <div className={cx('loading_info')}>
                <p className={cx('live-icon')}>LIVE</p>
                <p className={cx('username')}></p>
                <p className={cx('description')}></p>
            </div>
        </div>
    );
}

export default LiveLoading;
