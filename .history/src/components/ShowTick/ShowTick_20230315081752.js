import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { iconTick } from '../Icons/Icons';
import SvgIcon from '../Icons/SvgIcon';
import styles from './ShowTick.module.scss';
const cx = classNames.bind(styles);

function CheckTick({ tick = false, size }) {
    return tick && <SvgIcon className={cx('icon')} icon={iconTick} />;
}

CheckTick.propTypes = {
    tick: PropTypes.bool,
};
export default CheckTick;
