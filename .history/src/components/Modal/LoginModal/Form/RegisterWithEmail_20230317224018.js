import classNames from 'classnames/bind';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);

function RegisterWithEmail() {
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
                    onChange={handleChangPassword}
                    value={password}
                    type={showPass ? 'text' : 'password'}
                    placeholder="Mật Khẩu"
                />

                <span onClick={handleToggleShowpass} className={cx('showPassword-btn')}>
                    {showPass ? <SvgIcon icon={iconEyeShow} /> : <SvgIcon icon={iconEyeHide} />}
                </span>
            </div>

            <span className={cx('forgot-password')}>Quên mật khẩu?</span>

            <Button disable={!email || !password} onClick={handleSubmit} className={cx('submit-btn')} login>
                Đăng Nhập
            </Button>
        </form>
    );
}

export default RegisterWithEmail;
