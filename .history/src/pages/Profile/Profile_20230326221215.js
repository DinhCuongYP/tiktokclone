import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const { username: usernameParams } = useParams();
    const {
        first_name: firstName,
        last_name: lastName,
        nickname: username,
        avatar: avatarUrl,
        bio,
        tick,
        followings_count: followingsCount,
        followers_count: followersCount,
        likes_count: likesCount,
        website_url: websiteAddress,
    } = infoUser || {};

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountSevice.getUserAccount(usernameParams);
            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, [usernameParams]);

    return (
        <div className={cx('wrapper')}>
            {infoUser && (
                <div className={cx('profile')}>
                    <div className={cx('avatar')}>
                        <img src={avatarUrl} alt={`${firstName} ${lastName}`} />
                    </div>
                    <div className={cx('info')}>
                        <h1 className={cx('username')}>{username}</h1>
                        <p className={cx('name')}>{`${firstName} ${lastName}`}</p>
                        <p className={cx('bio')}>{bio}</p>
                        <p className={cx('follow-count')}>Followers: {followersCount}</p>
                        <p className={cx('follow-count')}>Followings: {followingsCount}</p>
                        <p className={cx('like-count')}>Likes: {likesCount}</p>
                        <a className={cx('website')} href={websiteAddress} target="_blank" rel="noreferrer">
                            {websiteAddress}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
