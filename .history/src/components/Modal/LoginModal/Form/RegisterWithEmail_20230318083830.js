import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import { iconEyeHide, iconEyeShow } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    // Function

    const handleChangPassword = (e) => {
        const value = e.target.value;
        const invalidValue = value.includes(' ');
        invalidValue || setPassword(e.target.value);
    };

    const handleToggleShowpass = () => {
        setShowPass(!showPass);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form>
            <div className={cx('form-header')}>
                <label className={cx('form-title')}>Email</label>
            </div>

            <div className={cx('form-input')}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Địa chỉ Email"
                />
            </div>

            <div className={cx('form-input')}>
                <input
                    onChange={handleChangPassword}
                    value={password}
                    type={showPass ? 'text' : 'password'}
                    placeholder="Mật Khẩu"
                />

                <span onClick={handleToggleShowpass} className={cx('showPassword-btn')}>
                    {showPass ? <SvgIcon icon={iconEyeShow} /> : <SvgIcon icon={iconEyeHide} />}
                </span>
            </div>

            <div className={cx('form-input')}>
                <input
                    onChange={(e) => setRePassword(e.target.value)}
                    value={rePassword}
                    type={showPass ? 'text' : 'password'}
                    placeholder=" Nhập lại Mật Khẩu"
                />
            </div>
            <Button
                disable={!email || !password}
                onClick={handleSubmit}
                className={cx('submit-btn', { disable: !email || !password || !rePassword })}
                login
            >
                Tiếp
            </Button>
        </form>
    );
}

export default LoginWithEmail;
