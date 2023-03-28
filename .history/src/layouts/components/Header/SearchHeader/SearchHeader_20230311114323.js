import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './SearchHeader.module.scss';

const cx = classNames.bind(styles);
function SearchHeader() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={cx('search')}>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Tìm kiếm tài khoản và video"
            />
            <button className={cx('close-btn')}>
                <FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
            </button>
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchHeader;
