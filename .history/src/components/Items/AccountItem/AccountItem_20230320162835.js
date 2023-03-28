import { Fragment } from 'react';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import ShowTick from '~/components/ShowTick';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ accountInfo }) {
    const {
        avatar: avatarUrl,
        nickname: userName,
        first_name: firstName,
        last_name: lastName,
        tick,
        followers_count: followersCount,
        likes_count: likesCount,
    } = accountInfo;

    const fullName = `${firstName} ${lastName}`;
    let ComWrapper = Fragment;
    return (
        <ComWrapper>
            <Link to={`/@${userName}`}>
                <Image className={cx('avatar')} src={avatarUrl} alt={fullName} />
                <div className={cx('body')}>
                    <h4 className={cx('userName')}>
                        {userName}
                        <ShowTick tick={tick} />
                    </h4>
                    <p className={cx('name')}>{fullName}</p>
                </div>
            </Link>
        </ComWrapper>
    );
}

AccountItem.propTypes = {
    accountInfo: PropTypes.object.isRequired,
};

export default AccountItem;
