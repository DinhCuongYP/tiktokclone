import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { iconLogo } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import config from '~/config';
import styles from './Header.module.scss';
import Search from './Search';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <SvgIcon icon={iconLogo} />
                    </Link>
                </div>
                <Search />
                <div className={cx('action-container')}>
                    <Button>OKe</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
