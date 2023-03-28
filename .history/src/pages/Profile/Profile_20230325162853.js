import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const { username } = useParams();

    const {
        first_name: firstName,
        last_name: lastName,
        nickname: usernameUrl,
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
            const dataResponse = await accountSevice.getUserAccount(username);

            setInfoUser(dataResponse);
        };
        getUserInfo();
    }, [username]);
    return (
        <div className={cx('wrapper')}>
            <h1>{username}</h1>
        </div>
    );
}

export default Profile;
