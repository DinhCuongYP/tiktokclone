import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);

    const { username: usernameParams } = useParams();
    return <h1>Profile page</h1>;
}

export default Profile;
