import { iconEmbed, iconFacebookShare, iconLink, iconPlaneShare, iconWhatsApp } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

export const videoShares = [
    {
        title: 'Nhúng',
        icon: <SvgIcon icon={iconEmbed} />,
    },

    {
        title: 'Gửi đến bạn bè',
        icon: <SvgIcon icon={iconPlaneShare} />,
    },

    {
        title: 'Chia sẻ với Facebook',
        icon: <SvgIcon icon={iconFacebookShare} />,
    },

    {
        title: 'Chia sẻ với WhatsApp',
        icon: <SvgIcon icon={iconWhatsApp} />,
    },

    {
        title: 'Sao chép liên kết',
        icon: <SvgIcon icon={iconLink} />,
    },
];
