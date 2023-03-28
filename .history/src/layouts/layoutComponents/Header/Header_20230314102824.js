import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src="" alt="logo" />
                <div>Search</div>
                <div>Action</div>
            </div>
        </header>
    );
}

export default Header;
