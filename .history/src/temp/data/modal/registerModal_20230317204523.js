import {
    iconApple,
    iconFacebookShare,
    iconGoogle,
    iconInstagram,
    iconKakaoTalk,
    iconLine,
    iconTwitter,
} from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

const registerModalData = {
    title: 'Đăng nhập vào TikTok ',
    data: [
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

        {
            title: 'Tiếp tục với Apple',
            icon: <SvgIcon icon={iconApple} />,
            disable: true,
        },

        {
            title: 'Tiếp tục với Instagram',
            icon: <SvgIcon icon={iconInstagram} />,
            disable: true,
        },
    ],
};

export default registerModalData;
