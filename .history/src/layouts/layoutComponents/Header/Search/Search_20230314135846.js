import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input placeholder="Tìm kiếm tài khoản và video" />
            <div>SeacrhIcon</div>
            <button>Search-btn</button>
        </div>
    );
}

export default Search;
