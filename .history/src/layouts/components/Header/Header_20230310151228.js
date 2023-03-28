import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/image';
import { Link } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import Actions from './Actions';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={'/'}>
                    <div>
                        <img src={image.logo} alt="Tiktok" className={cx('logo')} />
                    </div>
                </Link>
                <SearchHeader />
                <Actions />
            </header>
        </div>
    );
}
export default Header;
