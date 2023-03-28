import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    return (
        <form>
            <div className={cx('form-header')}>
                <label className={cx('form-title')}>Email hoặc TikTok ID</label>
            </div>

            <div className={cx('form-input')}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email hoặc TikTok ID"
                />
            </div>

            <div className={cx('form-input')}>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    placeholder="Mật Khẩu"
                />
            </div>

            <span className={cx('forgot-password')}>Quên mật khẩu?</span>

            <Button>Đăng Nhập</Button>
        </form>
    );
}

export default LoginWithEmail;
