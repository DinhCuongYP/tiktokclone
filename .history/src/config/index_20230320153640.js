import routes from './routes';
import localStorage from './localStorage';
import accounts from './accounts';

const config = {
    routes,
    accounts
    localStorage,
};

export default config;

// Mã này xuất ra một đối tượng config chứa thuộc tính routes với giá trị là đối tượng được import từ tệp ./routes
