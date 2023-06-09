import classNames from 'classnames/bind';
import styles from './TiktokLoading.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TiktokLoading({ medium = false, small = false }) {
    return <div id={cx('loader')} className={cx({ medium, small })} />;
}

TiktokLoading.propTypes = {
    medium: PropTypes.bool,
    small: PropTypes.bool,
};

export default TiktokLoading;
