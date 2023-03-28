import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    const { username: usernameParams } = useParams;

    useEffect(() => {
        console.log('test');
    }, [usernameParams]);

    return <h1>Profile</h1>;
}

export default Profile;
