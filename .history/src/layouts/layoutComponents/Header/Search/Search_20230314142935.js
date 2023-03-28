import classNames from 'classnames/bind';
import { iconClear, iconLoading, iconSearch } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    return (
        <form className={cx('wrapper')}>
            <input placeholder="Tìm kiếm tài khoản và video" />
            <div className={cx('icon-search')}>
                <div className={cx('clear')}>
                    <SvgIcon icon={iconClear} />
                </div>
                <div className={cx('loading')}>
                    <SvgIcon icon={iconLoading} />
                </div>
            </div>

            <button className={cx('btn-search-icon')}>
                <SvgIcon icon={iconSearch} />
            </button>
        </form>
    );
}

export default Search;
