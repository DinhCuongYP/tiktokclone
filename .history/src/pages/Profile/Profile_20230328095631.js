import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    const { username: usernameParams } = useParams();

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, [usernameParams]);

    return <button onClick={() => console.log(usernameParams)}>Profile</button>;
}

export default Profile;
