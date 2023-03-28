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
        if (items.length === 0) return;

        setMenuList([{ data: items }]);
    }, [items]);

    // Function

    const handleGoToChildrenMenu = (listMenuItemChildren) => {
        return setMenuList([...menuList, listMenuItemChildren]);
    };

    const getLastItem = (items) => {
        const lastIndex = items.length - 1;
        return items[lastIndex];
    };

    // SubMenu
    const renderMenuItem = () => {
        return currentTab.data.map((menuItem, index) => {
            const haveMenuChildren = !!menuItem.children;
            const handleClick = () => {
                haveMenuChildren ? handleGoToChildrenMenu(menuItem.children) : handleClickMenu(menuItem);
            };
            return <MenuItem key={index} menuInfo={menuItem} onClick={handleClick} isSubMenu={menuList.length > 1} />;
        });
    };

    //

    // Defaulf Menu
    const renderMenu = (attrs) => (
        <nav className={cx('wrapper-menu')} tabIndex="-1" {...attrs}>
            <div data-popper-arrow className={cx('arrow-poper', { 'sub-menuChildren': menuList.length > 1 })} />
            <WrapperPopper className={cx('menu-list')}>
                {menuList.length > 1 && <MenuHeader title={menuTitle} onBack={handleGoToChildrenMenu} />}
                <div className={cx('menu-item-wrapper')}>{renderMenuItem()}</div>
            </WrapperPopper>
        </nav>
    );

    const currentTab = getLastItem(menuList);
    const menuTitle = currentTab.title;
    return (
        <TippyHeadless
            visible
            render={renderMenu}
            interactive
            offset={[20, 12]}
            delay={[0, 700]}
            placement="bottom-end"
            hideOnClick={false}
            onHidden={() => setMenuList([menuList[0]])}
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
