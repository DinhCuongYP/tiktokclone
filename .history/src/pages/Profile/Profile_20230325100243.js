import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const { nickname: username } = infoUser;
    const { username: nicknameParams } = useParams;
    return (
        <div className={cx('wrapper')}>
            <h1>Aloo</h1>
        </div>
    );
}

export default Profile;
