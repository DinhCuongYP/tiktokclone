import { iconFacebookShare, iconKakaoTalk, iconLine, iconTwitter, iconUser } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
// import { RegisterWithEmail } from '~/components/Modal/LoginModal/Form';

const registerModalData = {
    titte: 'Đăng ký TikTok',
    data: [
        {
            titte: 'Sử dụng số điện thoại hoặc Email',
            icon: <SvgIcon icon={iconUser} />,
        },

        {
            titte: 'Tiếp tục với Facebook',
            icon: <SvgIcon icon={iconFacebookShare} />,
        },

        {
            titte: 'Tiếp tục với Twitter',
            icon: <SvgIcon icon={iconTwitter} />,
        },

        {
            titte: 'Tiếp tục với LINE',
            icon: <SvgIcon icon={iconLine} />,
        },

        {
            titte: 'Tiếp tục với KakaoTalk',
            icon: <SvgIcon icon={iconKakaoTalk} />,
        },
    ],
};

export default registerModalData;
