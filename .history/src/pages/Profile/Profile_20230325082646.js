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
            const result = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(result);

            const videos = result?.videos;
            const likedVideos = [];
            setVideoData([videos, likedVideos]);
        };

        getUserInfo();

        setInfoUser(null);
        setVideoData(null);
    }, [usernameParams]);

    return (
        <div className={cx('wrapper')}>
            {!!infoUser && (
                <header className={cx('user-wrapper')}>
                    <strong>{username}</strong>
                </header>
            )}
        </div>
    );
}

export default Profile;
