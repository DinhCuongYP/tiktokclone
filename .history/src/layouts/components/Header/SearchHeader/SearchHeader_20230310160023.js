import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';
const cx = classNames.bind(styles);
function SearchHeader() {
    return (
        <div className={cx('search')}>
            <input placeholder="Tìm kiếm tài khoản và video" />

            <button className={cx('icon-btn')}></button>
            <span className={cx('delimiter')}></span>
            <button className={cx('search-icon')}>
                <svg
                    width="24"
                    data-e2e=""
                    height="24"
                    viewBox="0 0 48 48"
                    fill="currentcolor"
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
    );
}

export default SearchHeader;
