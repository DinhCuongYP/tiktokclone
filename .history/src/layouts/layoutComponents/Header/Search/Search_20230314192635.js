import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { iconClear, iconLoading, iconSearch } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    // UseState
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    // UseRef
    const inputRef = useRef();
    // Function Handle

    // Use

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
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
    );
}

export default Search;
