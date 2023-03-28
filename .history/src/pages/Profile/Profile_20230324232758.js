import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState();

    const { username: usernameParams } = useParams();

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
