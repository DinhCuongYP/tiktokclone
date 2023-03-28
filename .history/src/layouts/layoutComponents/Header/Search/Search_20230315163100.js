import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { iconClear, iconLoading, iconSearch } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import { WrapperPopper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce';
import styles from './Search.module.scss';
import SearchAccountItem from '~/components/Items/SearchAccountItem';
import * as searchSevice from '~/sevices/searchSevice';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Search() {
    // React-router-dom
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    // useLayoutEffect
    useLayoutEffect(() => {
        const searchPath = config.routes.search;
        if (pathname.startsWith(searchPath)) {
            const searchKey = searchParams.get('q');
            const keyValidate = searchKey.trim();
            !!keyValidate && setSearchValue(keyValidate);
        }
    }, []);
    // UseState
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    // UseRef
    const inputRef = useRef();
    const formRef = useRef();

    // useEffect
    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }
        // Call Api
        const fetchApi = async () => {
            setLoading(true);
            const resultSearch = await searchSevice.search(debounced);
            setSearchResult(resultSearch);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    // Function Handle

    const handleChangeSearchValue = (e) => {
        const valueSearchInput = e.target.value;
        valueSearchInput.startsWith(' ') || setSearchValue(valueSearchInput);
    };

    const handleClearValueSearch = useCallback((isFocus) => {
        setSearchValue('');
        if (isFocus === true) {
            inputRef.current.focus();
        }
    }, []);

    const handleBlurValueSearch = () => {
        inputRef.current.focus();
        return setShowSearch(false);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (!!searchValue) {
            navigate(`${config.routes.search}?q=${searchValue}`);
            handleBlurValueSearch();
        }
    };

    const renderSearchResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <WrapperPopper>
                <div className={cx('title-search_title')}>Tài Khoản</div>
                {searchResult.map((accounItem) => (
                    <SearchAccountItem key={accounItem.id} accountInfo={accounItem} onClick={handleClearValueSearch} />
                ))}

                {/*  */}

                <Link
                    className={cx('search-seeall')}
                    to={`${config.routes.search}?q=${searchValue}`}
                    onClick={handleBlurValueSearch}
                >
                    Xem tất cả kết quả cho "{searchValue}"
                </Link>
            </WrapperPopper>
        </div>
    );

    return (
        <TippyHeadless
            interactive
            visible={showSearch && !!searchValue && searchResult.length > 0}
            render={renderSearchResult}
            onClickOutside={handleBlurValueSearch}
        >
            <form onSubmit={handleSubmitForm} ref={formRef} className={cx('wrapper')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={handleChangeSearchValue}
                    onFocus={() => {
                        setShowSearch(true);
                    }}
                    onKeyDown={(e) => e.stopPropagation()}
                />
                <div className={cx('icon-search')}>
                    {!!searchValue && !loading && (
                        <button onClick={() => handleClearValueSearch(true)} className={cx('icon-clear')}>
                            <SvgIcon icon={iconClear} />
                        </button>
                    )}
                    {!!loading && (
                        <div className={cx('icon-loading')}>
                            <SvgIcon icon={iconLoading} />
                        </div>
                    )}
                </div>

                <button onMouseDown={(e) => e.preventDefault()} className={cx('btn-search')}>
                    <SvgIcon icon={iconSearch} />
                </button>
            </form>
        </TippyHeadless>
    );
}

export default Search;

// Trong React, useRef là một hook được sử dụng để giữ trạng thái giữa các lần render của component, mà không gây ra re-render khi thay đổi giá trị. useRef trả về một đối tượng có thuộc tính là current. Bạn có thể đặt bất kỳ giá trị nào vào thuộc tính này, và giá trị đó sẽ được giữ nguyên qua các lần render.

// Các ứng dụng của useRef bao gồm:

// Lấy giá trị của một thành phần HTML: useRef có thể được sử dụng để lấy giá trị của một thành phần HTML, ví dụ như một ô input. Bạn có thể sử dụng thuộc tính current để lấy giá trị của thành phần đó sau khi đã được nhập vào.

// Lưu trữ các giá trị trung gian: useRef có thể được sử dụng để lưu trữ các giá trị trung gian mà không cần gọi lại component. Điều này có thể hữu ích khi bạn cần giữ trạng thái của một thành phần mà không muốn re-render component.

// Thực hiện các thao tác trên các thành phần HTML: useRef có thể được sử dụng để thực hiện các thao tác trên các thành phần HTML, ví dụ như thay đổi nội dung của một thành phần sau khi đã được render.

// -----------------------------------------------------------------------------------------

// Đây là một component React được định nghĩa trong file Search.jsx. Component này là một công cụ tìm kiếm trên trang web và cho phép người dùng tìm kiếm các tài khoản và video trên trang web. Các chức năng của component này bao gồm:

// Hiển thị ô tìm kiếm và các nút liên quan
// Xử lý sự kiện nhập liệu vào ô tìm kiếm và gọi API tìm kiếm khi người dùng nhập liệu vào ô tìm kiếm
// Hiển thị kết quả tìm kiếm cho người dùng
// Cho phép người dùng xem tất cả các kết quả tìm kiếm và chuyển đến trang tìm kiếm khi nhấp vào nút "Xem tất cả kết quả".
