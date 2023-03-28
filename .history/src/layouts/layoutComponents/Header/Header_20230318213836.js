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
import MenuPopper from '~/components/Popper/MenuPopper';
import dataTemp from '~/temp/data';
const cx = classNames.bind(styles);

function Header() {
    const { loginModalShow } = useContext(ModalContextKey);
    const menuInfo = dataTemp.menus.PublicMenuItem;

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
                    <button onClick={loginModalShow} leftIcon={<SvgIcon icon={iconUpload} size={20} />} upload>
                        Tải Lên
                    </button>
                    <Button onClick={loginModalShow} login>
                        Đăng Nhập
                    </Button>

                    <MenuPopper items={menuInfo}>
                        <button className={cx('btn-more')}>
                            <SvgIcon icon={iconMoreBtn} size={20} />
                        </button>
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
