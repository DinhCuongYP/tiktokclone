import { iconQR } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';

const loginModalData = {
    titte: 'Đăng Nhập Vào TikTok',
    data: [
        {
            titte: 'Sử dụng mã QR',
            icon: <SvgIcon icon={iconQR} />,
        },
    ],
};

export default loginModalData;
