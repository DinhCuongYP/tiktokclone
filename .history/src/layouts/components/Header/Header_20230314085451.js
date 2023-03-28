import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/image';
import { Link } from 'react-router-dom';
import SearchHeader from './SearchHeader';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('image-logo')}>
                    <Link to="/">
                        <img src={image.logo} alt="Tiktok" className={cx('logo')} />
                    </Link>
                </div>
                <SearchHeader />
            </header>
        </div>
    );
}
export default Header;
