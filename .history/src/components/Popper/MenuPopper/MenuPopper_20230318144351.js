import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import WrapperPopper from '../Wrapper/WrapperPopper';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function MenuPopper({ children, items = [], handleClickMenu, customTippy = {} }) {
    const [menuList, setMenuList] = useState([{ data: items }]);

    useEffect(() => {
        if (items === 0) {
            return;
        }

        setMenuList([{ data: items }]);
    }, [items]);

    const renderMenu = (attrs) => (
        <nav className={cx('wrapper-menu')} tabIndex="-1" {...attrs}>
            <div data-poppe-arrow className={cx('arrow-poper')}></div>
            <WrapperPopper className={cx('menu-list')}>
                {menuList > 1 && <MenuHeader />}
                <div className={cx('menu-item-wrapper')}>
                    <MenuItem />
                </div>
            </WrapperPopper>
        </nav>
    );

    return (
        <TippyHeadless
            render={renderMenu}
            interactive
            offset={[20, 12]}
            delay={[0, 700]}
            onHidden={() => setMenuList([menuList[0]])}
            hideOnClick={false}
            {...customTippy}
        >
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.element,
    items: PropTypes.array,
    handleClickMenu: PropTypes.func,
    customTippy: PropTypes.object,
};

export default MenuPopper;
