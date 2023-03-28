import {
    iconKeyboardArrowTop,
    iconKeyboardL,
    iconKeyboardM,
    iconLanguge,
    iconMoon,
    iconQuestion,
} from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

export const PublicMenuItem = [
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
        icon: <SvgIcon icon={iconKeyboard} />,
        type: 'keyboard-modal',
    },

    {
        title: 'Chế độ tối',
        icon: <SvgIcon icon={iconMoon} />,
    },
];
