import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BorderTopContainer.module.scss';
const cx = classNames.bind(styles);
function BorderTopContainer({ children, className }) {
    return <div className={cx('wrapper', { [className]: className })}>{children}</div>;
}

export default BorderTopContainer;
