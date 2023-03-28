import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowLeft } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx('header-subMenu')}>
            <span onClick={onBack} className={cx('btn-backMenuMain')}>
                <SvgIcon icon={iconArrowLeft} />
            </span>
            <span className={cx('header-subTitle')}>{title}</span>
        </div>
    );
}

MenuHeader.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};

export default MenuHeader;
