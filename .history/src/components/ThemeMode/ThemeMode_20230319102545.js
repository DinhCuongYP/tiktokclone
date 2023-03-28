import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import config from '~/config';
import useLocalStorage from '~/hooks/useLocalStorage';
import styles from './ThemeMode.module.scss';
const cx = classNames.bind(styles);

function ThemeMode() {
    const appStorageKey = config.localStorage.app;
    const [dataStorage, setDataStorage] = useLocalStorage(appStorageKey);
    const [isDarkTheme, setIsDarkThem] = useState(dataStorage.theme === 'dark');

    const handleToggleTheme = () => {
        setIsDarkThem(!isDarkTheme);
    };

    useEffect(() => {
        const themeData = {
            theme: 'light',
        };

        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeData.theme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        setDataStorage(themeData);
    }, [isDarkTheme, setDataStorage]);

    return (
        <div>
            <input type="checkbox" hidden id={cx('them-input')} checked={isDarkTheme} onChange={handleToggleTheme} />
            <label className={cx('switch')} htmlFor={cx('them-input')}></label>
        </div>
    );
}

export default ThemeMode;
