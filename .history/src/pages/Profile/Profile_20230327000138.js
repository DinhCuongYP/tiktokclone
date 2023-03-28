import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const { username: usernameParams } = useParams();
    // eslint-disable-next-line no-unused-vars
    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    useEffect(() => {
        const getUserInfo = async () => {
            console.log('Test');
            const dataResponse = await accountSevice.getUserAccount(usernameParams);
            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, [usernameParams]);

    return <h1>Test</h1>;
}

export default Profile;
