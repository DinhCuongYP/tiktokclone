import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    return (
        <form className={cx('wrapper')}>
            <input placeholder="Tìm kiếm tài khoản và video" />
            <div className={cx('icon-search')}>
                <div className={cx('clear')}></div>
            </div>
            <button>Search-btn</button>
        </form>
    );
}

export default Search;
