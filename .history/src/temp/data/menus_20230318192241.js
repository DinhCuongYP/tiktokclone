import { iconKeyboard, iconLanguge, iconMoon, iconQuestion } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

export const PublicMenuItem = [
    {
        title: 'Tiếng Việt',
        icon: <SvgIcon icon={iconLanguge} />,
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },
                {
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    title: '한국어 (대한민국)',
                },
                {
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    title: 'Nederlands (Nederland)',
                },
                {
                    title: 'Polski (Polska)',
                },
                {
                    title: 'Português (Brasil)',
                },
                {
                    title: 'Română (Romania)',
                },
                {
                    title: 'Русский (Россия)',
                },
                {
                    title: 'Svenska (Sverige)',
                },
                {
                    title: 'ไทย (ไทย)',
                },
                {
                    title: 'Türkçe (Türkiye)',
                },
                {
                    title: 'Українська (Україна)',
                },
                {
                    title: 'اردو',
                },
                {
                    title: '简体中文',
                },
                {
                    title: '繁體中文',
                },
            ],
        },
    },

    {
        title: 'Phản hồi và trợ giúp',
        icon: <SvgIcon icon={iconQuestion} />,
        href: 'https://www.tiktok.com/feedback',
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
