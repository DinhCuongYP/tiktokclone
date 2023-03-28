import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);

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
            const result = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(result);
        };

        getUserInfo();
    }, [usernameParams]);

    return <h1>Profile page</h1>;
}

export default Profile;
