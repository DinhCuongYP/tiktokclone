import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import ListItems from '~/components/GlobalStyles/ListItems';

import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './SearchHeader.module.scss';
import ListAccount from './ListAccount';

const cx = classNames.bind(styles);
function SearchHeader() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setloading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResul, setShowSearchResul] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    }, []);

    function handleClear() {
        setSearchValue('');
        setShowSearchResul([]);
        inputRef.current.focus();
    }

    function handleHideResult() {
        setShowSearchResul(false);
    }

    return (
        <Tippy
            interactive
            visible={showSearchResul && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('wrapper-list')} tabIndex="-1" {...attrs}>
                    <ListItems>
                        <h4 className={cx('heading')}>Tài Khoản</h4>
                        <div className={cx('info')}>
                            <ListAccount />
                            <ListAccount />
                            <ListAccount />
                            <ListAccount />
                            <ListAccount />
                            <ListAccount />
                        </div>
                    </ListItems>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => setShowSearchResul(true)}
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
