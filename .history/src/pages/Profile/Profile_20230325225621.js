import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const { username: usernameParams } = useParams();
    const [infoUser, setInfoUser] = useState(null);
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
    return <div className={cx('wrapper')}>{infoUser && <h1>{infoUser.nickname}</h1>}</div>;
}

export default Profile;
