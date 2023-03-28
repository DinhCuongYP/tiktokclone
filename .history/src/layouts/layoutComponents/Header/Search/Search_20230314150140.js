import classNames from 'classnames/bind';
import { iconClear, iconLoading, iconSearch } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    return (
        <form className={cx('wrapper')}>
            <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
            <div className={cx('icon-search')}>
                <div className={cx('icon-clear')}>
                    <SvgIcon icon={iconClear} />
                </div>
                <div className={cx('icon-loading')}>
                    <SvgIcon icon={iconLoading} />
                </div>
            </div>

            <button type="Submit" className={cx('btn-search')}>
                <SvgIcon icon={iconSearch} />
            </button>
        </form>
    );
}

export default Search;
