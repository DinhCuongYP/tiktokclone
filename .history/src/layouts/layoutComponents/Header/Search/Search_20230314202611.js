import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { iconClear, iconLoading, iconSearch } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import { WrapperPopper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce';
import styles from './Search.module.scss';
import searchSevice from '~/sevices';
const cx = classNames.bind(styles);

function Search() {
    // UseState
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const debounced = useDebounce(searchValue, 500);
    // UseRef
    const inputRef = useRef();

    // useEffect
    useEffect(() => {
        // Call Api
        const fetchApi = async () => {
            const resultSearch = await searchSevice.search(debounced);
            setSearchResult(resultSearch);
        };

        fetchApi();
    }, [debounced]);
    // Function Handle

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const renderSearchResult = (attrs) => {
        return (
            <WrapperPopper>
                {searchResult.map((result) => (
                    <h1>oke</h1>
                ))}
            </WrapperPopper>
        );
    };

    return (
        <Tippy interactive visible render={renderSearchResult}>
            <form className={cx('wrapper')}>
                <input
                    ref={inputRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                />
                <div className={cx('icon-search')}>
                    {!!searchValue && (
                        <button onClick={handleClear} className={cx('icon-clear')}>
                            <SvgIcon icon={iconClear} />
                        </button>
                    )}
                    {!!loading && (
                        <div className={cx('icon-loading')}>
                            <SvgIcon icon={iconLoading} />
                        </div>
                    )}
                </div>

                <div className={cx('btn-search')}>
                    <SvgIcon icon={iconSearch} />
                </div>
            </form>
        </Tippy>
    );
}

export default Search;

// Trong React, useRef là một hook được sử dụng để giữ trạng thái giữa các lần render của component, mà không gây ra re-render khi thay đổi giá trị. useRef trả về một đối tượng có thuộc tính là current. Bạn có thể đặt bất kỳ giá trị nào vào thuộc tính này, và giá trị đó sẽ được giữ nguyên qua các lần render.

// Các ứng dụng của useRef bao gồm:

// Lấy giá trị của một thành phần HTML: useRef có thể được sử dụng để lấy giá trị của một thành phần HTML, ví dụ như một ô input. Bạn có thể sử dụng thuộc tính current để lấy giá trị của thành phần đó sau khi đã được nhập vào.

// Lưu trữ các giá trị trung gian: useRef có thể được sử dụng để lưu trữ các giá trị trung gian mà không cần gọi lại component. Điều này có thể hữu ích khi bạn cần giữ trạng thái của một thành phần mà không muốn re-render component.

// Thực hiện các thao tác trên các thành phần HTML: useRef có thể được sử dụng để thực hiện các thao tác trên các thành phần HTML, ví dụ như thay đổi nội dung của một thành phần sau khi đã được render.
