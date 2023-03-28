import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function MenuPopper({ children, items = [], handleClickMenu, customTippy = {} }) {
    return (
        <TippyHeadless interactive placement="bottom-end" render={<h1>Aloo</h1>}>
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
