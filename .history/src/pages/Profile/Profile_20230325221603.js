import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    const { username: usernameParams } = useParams();
    useEffect(() => {
        const getUserInfo = async () => {
            console.log('test');
        };

        getUserInfo();
    }, [usernameParams]);
    return (
        <div className={cx('wrapper')}>
            <h1>Test</h1>
        </div>
    );
}

export default Profile;
