import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);

    const { nickname: username } = infoUser;

    const { username: usernameParams } = useParams();

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, []);

    return <h1>Profile</h1>;
}

export default Profile;
