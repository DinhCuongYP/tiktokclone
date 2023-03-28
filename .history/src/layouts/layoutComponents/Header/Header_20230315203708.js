import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { iconLogo, iconMoreBtn, iconUpload } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import config from '~/config';
import styles from './Header.module.scss';
import Search from './Search';
import { ModalContextKey } from '~/contexts/ModalContext';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const { LoginModalShow } = useContext(ModalContextKey);
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
                    <Button onclick={LoginModalShow} leftIcon={<SvgIcon icon={iconUpload} size={20} />} upload>
                        Tải Lên
                    </Button>
                    <Button login>Đăng Nhập</Button>
                    <Button>
                        <SvgIcon icon={iconMoreBtn} size={20} />
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
