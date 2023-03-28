import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';

const cx = classNames.bind(styles);
function SearchHeader() {
    return (
        <div className={cx('search')}>
            <input placeholder="Tìm kiếm tài khoản và video" />

            <button className={cx('icon-close')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} />
            <span className={cx('delimiter')}></span>
            <button className={cx('search-icon')}>
                <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
            </button>
        </div>
    );
}

export default SearchHeader;
