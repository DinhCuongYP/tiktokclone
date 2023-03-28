import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return <h1>Alô</h1>;
}

MenuHeader.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};

export default MenuHeader;
