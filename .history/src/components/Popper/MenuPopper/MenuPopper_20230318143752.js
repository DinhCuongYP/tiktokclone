import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function MenuPopper({ children, items = [], handleClickMenu, customTippy = {} }) {
    const [menuList, setMenuList] = useState([{ data: items }]);

    useEffect(() => {
        if (items === 0) {
            return;
        }

        setMenuList([{ data: items }]);
    }, [items]);
    return <TippyHeadless>{children}</TippyHeadless>;
}

MenuPopper.propTypes = {
    children: PropTypes.element,
    items: PropTypes.array,
    handleClickMenu: PropTypes.func,
    customTippy: PropTypes.object,
};

export default MenuPopper;
