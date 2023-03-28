import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState();

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
            const dataReponse = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(dataReponse);
        };

        getUserInfo();

        setInfoUser(null);
    }, [usernameParams]);

    return (
        <div className={cx('wrapper')}>
            <h1>{firstName}</h1>
        </div>
    );
}

export default Profile;
