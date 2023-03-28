import { iconKeyboardL, iconLanguge, iconMoon, iconQuestion } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

const PublicMenuItem = [
    {
        title: 'Tiếng Việt',
        icon: <SvgIcon icon={iconLanguge} />,
    },

    {
        title: 'Phản hồi và trợ giúp',
        icon: <SvgIcon icon={iconQuestion} />,
    },

    {
        title: 'Phím tắt trên bàn phím',
        icon: <SvgIcon icon={iconKeyboardL} />,
    },

    {
        title: 'Chế độ tối',
        icon: <SvgIcon icon={iconMoon} />,
    },
];

export default PublicMenuItem;
