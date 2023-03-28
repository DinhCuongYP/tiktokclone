import classNames from 'classnames/bind';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithEmail() {
    return (
        <form>
            {/* Header */}
            <div className={cx('header-from')}>
                <label className={cx('title')}>Email Hoặc Tiktok</label>
            </div>
        </form>
    );
}

export default LoginWithEmail;
