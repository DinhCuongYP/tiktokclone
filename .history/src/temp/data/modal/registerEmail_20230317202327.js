import { iconUser } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import { RegisterWithEmail } from '~/components/Modal/LoginModal/Form';

const registerModalData = {
    titte: 'Đăng ký TikTok',
    data: [
        {
            titte: 'Sử dụng số điện thoại hoặc Email',
            icon: <SvgIcon icon={iconUser} />,
        },
    ],
};

export default registerModalData;
