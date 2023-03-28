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
}) {
    return <h1>AccountPreview</h1>;
}

export default AccountPreview;
