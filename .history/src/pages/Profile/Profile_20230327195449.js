import { useState } from 'react';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    return <h1>Profile</h1>;
}

export default Profile;
