import classNames from 'classnames/bind';
import image from '~/assets/image';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithQR() {
    return (
        <div className={cx('loginQR-wrapper')}>
            <div className={cx('left-space')}>
                <div className={cx('QR')}>
                    <img className={cx('img-QR')} src={image.fbQR} alt="QR" />
                </div>
            </div>
            <div className={cx('step-list')}>
                <p className={cx('step-item')}>1. Mở ứng dụng TikTok trên thiết bị di động của bạn</p>
                <p className={cx('step-item')}>2. Trên Hồ sơ, nhấn vào </p>
                <p className={cx('step-item')}>3. Nhấn vào </p>
            </div>
            <div className={cx('right-space')}></div>
        </div>
    );
}

export default LoginWithQR;
