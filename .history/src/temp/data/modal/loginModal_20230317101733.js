import {
    iconApple,
    iconFacebookShare,
    iconGoogle,
    iconInstagram,
    iconKakaoTalk,
    iconLine,
    iconQR,
    iconTwitter,
    iconUser,
} from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

const loginModalData = {
    title: 'Đăng nhập vào TikTok ',
    data: [
        {
            title: 'Sử dụng mã QR',
            icon: <SvgIcon icon={iconQR} />,
        },

        {
            title: 'Số điện thoại / Email / TikTok ID',
            icon: <SvgIcon icon={iconUser} />,
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

export default loginModalData;
