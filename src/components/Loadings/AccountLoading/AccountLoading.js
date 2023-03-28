import classNames from 'classnames/bind';
import styles from './AccountLoading.module.scss';
const cx = classNames.bind(styles);

function AccountLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('container')}>
                <div className={cx('user-name')}></div>
                <div className={cx('name')}></div>
            </div>
        </div>
    );
}

export default AccountLoading;
