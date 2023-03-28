import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
const cx = classNames.bind(styles);

function MenuPopper({children, items = [], handleClickMenu, customTippy = {}}) {
    return (  );
}

MenuPopper.propTypes = {
    children: PropTypes.element,
    items: PropTypes.array,
    handleClickMenu: PropTypes.func,
    customTippy: PropTypes.object,
}

export default MenuPopper;