import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import ListItems from '~/components/GlobalStyles/ListItems';

import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './SearchHeader.module.scss';
import useDebounce from '~/hooks/useDebounce';
import httpRequest from '~/utils/httpRequest';
import { search } from '~/sevices/searchSevice';
import ListAccount from './ListAccount';

const cx = classNames.bind(styles);
function SearchHeader() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setloading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResul, setShowSearchResul] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    //

    useEffect(() => {
        const fetchApi = async () => {
            const result = await httpRequest.search(debounced);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounced]);

    // Funcition Handle
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
                            {searchResult.map((result) => (
                                <ListAccount key={result.id} data={result} />
                            ))}
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
                {!!searchValue && !loading && (
                    <button onClick={handleClear} className={cx('close-btn')}>
                        <FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <svg
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 48 48"
                        fill="rgba(22, 24, 35, .34)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </Tippy>
    );
}

export default SearchHeader;
