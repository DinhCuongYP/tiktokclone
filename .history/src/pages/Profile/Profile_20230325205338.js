import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const { username: usernameParams } = useParams();

    const { nickname: username, first_name: firstName } = infoUser || {};

    useEffect(() => {
        const getUserInfo = async () => {
            const result = await accountSevice.getUserAccount(usernameParams);
            setInfoUser(result);
            console.log('test');
        };

        getUserInfo();
    }, [usernameParams]);

    return <h1>Test</h1>;
}

export default Profile;
