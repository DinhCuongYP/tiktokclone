import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const { username: usernameParams } = useParams();
    const {
        nickname: username,
        first_name: firstName,
        last_name: lastName,
        avatar: avatarUrl,
        tick,
        followers_count: followersCount,
        followings_count: followingsCount,
        likes_count: likesCount,
        bio,
        website_url: websiteAddress,
    } = infoUser || {};

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountSevice.getUserAccount(usernameParams);

            // set user data
            setInfoUser(dataResponse);

            // set video data
            const videos = dataResponse?.videos;
            const likedVideos = [];
            setVideoData([videos, likedVideos]);
        };
        getUserInfo();

        setInfoUser(null);
        setVideoData(null);
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
