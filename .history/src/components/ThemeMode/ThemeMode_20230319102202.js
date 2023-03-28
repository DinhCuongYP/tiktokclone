import classNames from 'classnames/bind';
import { useState } from 'react';
import config from '~/config';
import useLocalStorage from '~/hooks/useLocalStorage';
import styles from './ThemeMode.module.scss';
const cx = classNames.bind(styles);

function ThemeMode() {
    const appStorageKey = config.localStorage.app;
    const [dataStorage, setDataStorage] = useLocalStorage(appStorageKey);
    const [isDarkTheme, setIsDarkThem] = useState(dataStorage.them === 'dark');

    const handleToggleTheme = () => {
        setIsDarkThem(!isDarkTheme);
    };
    return (
        <div>
            <input type="checkbox" hidden id={cx('them-input')} />
            <label className={cx('switch')} htmlFor={cx('them-input')}></label>
        </div>
    );
}

export default ThemeMode;
