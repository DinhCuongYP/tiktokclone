import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountService } from '~/sevices';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const { username: usernameParams } = useParams();
    const [infoUser, setInfoUser] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountService.getUserAccount(usernameParams);
            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, [usernameParams]);
    return (
        <div className={cx('wrapper')}>
            <h1>{infoUser?.nickname}</h1>
        </div>
    );
}

export default Profile;
