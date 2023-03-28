import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const { username: usernameParams } = useParams();
    const [infoUser, setInfoUser] = useState(null);
    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    useEffect(() => {
        const getUserInfo = async () => {
            console.log('Test');
            const dataResponse = await accountSevice.getUserAccount(usernameParams);
            setInfoUser(dataResponse);
        };

        getUserInfo();
    }, [usernameParams]);

    return (
        <div className={cx('wrapper')}>
            {infoUser && (
                <div className={cx('profile')}>
                    <h1>test</h1>
                </div>
            )}
        </div>
    );
}

export default Profile;
