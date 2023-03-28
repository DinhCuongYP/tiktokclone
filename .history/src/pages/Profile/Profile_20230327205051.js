import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const { first_name: firstName, last_name: lastName, nickname: username } = infoUser || {};

    const { username: usernameParams } = useParams();

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         const dataResponse = await accountSevice.getUserAccount(usernameParams);

    //         setInfoUser(dataResponse);
    //     };

    //     getUserInfo();
    // }, [usernameParams]);

    const fetchData = async () => {
        try {
            const dataResponse = await getUserInfo();
            console.log(dataResponse); // kiểm tra kết quả trả về
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();

    return <h1>Profile</h1>;
}

export default Profile;
