import classNames from 'classnames/bind';
import styles from './ThemeMode.module.scss';
const cx = classNames.bind(styles);

function ThemeMode() {
    return (
        <div>
            <input type="checkbox" hidden id={cx('them-input')} />
            <label htmlFor="them-input"></label>
        </div>
    );
}

export default ThemeMode;
