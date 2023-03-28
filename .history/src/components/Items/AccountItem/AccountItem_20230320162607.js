import { Fragment } from 'react';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import ShowTick from '~/components/ShowTick';
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
            <Image className={cx('avatar')} src={avatarUrl} alt={fullName} />
            <div className={cx('body')}>
                <h4 className={cx('userName')}>
                    {userName}
                    <ShowTick tick={tick} />
                </h4>
                <p className={cx('name')}>{fullName}</p>
            </div>
        </ComWrapper>
    );
}

export default AccountItem;
