import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const { username: usernameParams } = useParams();

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

    return <h1>Profile page</h1>;
}

export default Profile;
