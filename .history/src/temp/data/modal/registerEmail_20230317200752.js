import SvgIcon from '~/components/Icons/SvgIcon';

import {
    iconUser,
    iconFacebookShare,
    iconGoogle,
    iconTwitter,
    iconLine,
    iconKakaoTalk,
} from '~/components/Icons/Icons';
import { RegisterWithEmail } from '~/components/Modal/LoginModal/Form';

const registerModalData = {
    title: 'Đăng Ký TikTok',
    data: [
        {
            title: 'Sử dụng số điện thoại hoặc Email',
            icon: <SvgIcon icon={iconUser} />,
            children: {
                title: 'Đăng ký',
                type: 'component',
                data: RegisterWithEmail,
            },
        },

        {
            title: 'Tiếp tục với Facebook',
            icon: <SvgIcon icon={iconFacebookShare} />,
            disable: true,
        },

        {
            title: 'Tiếp tục với Google',
            icon: <SvgIcon icon={iconGoogle} />,
            disable: true,
        },

        {
            title: 'Tiếp tục với Twitter',
            icon: <SvgIcon icon={iconTwitter} />,
            disable: true,
        },

        {
            title: 'Tiếp tục với Line',
            icon: <SvgIcon icon={iconLine} />,
            disable: true,
        },

        {
            title: 'Tiếp tục với KakaoTalk',
            icon: <SvgIcon icon={iconKakaoTalk} />,
            disable: true,
        },
    ],
};

export default registerModalData;
