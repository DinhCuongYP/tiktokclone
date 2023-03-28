import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithEmail() {
    const [email, setEmail] = useState('');
    return (
        <form>
            {/* Header */}
            <div className={cx('header-from')}>
                <label className={cx('title')}>Email Hoặc Tiktok</label>
            </div>

            {/* Email */}

            <div className={cx('form-input')}>
                <input
                    value={email}
                    placeholder="Email hoặc TikTok ID"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* PassWord */}
        </form>
    );
}

export default LoginWithEmail;
