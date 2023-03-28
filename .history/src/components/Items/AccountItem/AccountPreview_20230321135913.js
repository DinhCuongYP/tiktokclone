import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountPreview({
    children,
    className,
    avatarUrl,
    userName,
    followersCount,
    likesCount,
    fullName,
    customTippy,
    tick,
}) {
    return <h1>AccountPreview</h1>;
}

AccountPreview.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    avatarUrl: PropTypes.string,
    userName: PropTypes.string,
    followersCount: PropTypes.string,
    likesCount: PropTypes.string,
    fullName: PropTypes.string,
    customTippy: PropTypes.object,
    tick: PropTypes.bool,
};

export default AccountPreview;
