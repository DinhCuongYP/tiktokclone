import classNames from 'classnames/bind';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithEmail() {
    return (
        <form>
            <div className={cx('form-header')}>
                <label className={cx('form-title')}>Email hoặc TikTok ID</label>
            </div>
        </form>
    );
}

export default LoginWithEmail;
