import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './SearchHeader.module.scss';

const cx = classNames.bind(styles);
function SearchHeader() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setloading] = useState(false);
    const inputRef = useRef();

    function handleClear() {
        setSearchValue('');
        inputRef.current.focus();
    }

    return (
        <Tippy
            interactive
            visible={visible}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    My tippy box
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video"
                />
                {!!searchValue && (
                    <button onClick={handleClear} className={cx('close-btn')}>
                        <FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default SearchHeader;
