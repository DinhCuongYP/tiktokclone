import { Home, Following, Upload, Profile, Live, SearchDetails } from '~/pages';
import config from '~/config';
import { FullSpace, FollowingLayout } from '~/layouts';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: FollowingLayout },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.profile, component: Profile, layout: FullSpace },
    { path: config.routes.live, component: Live, layout: FullSpace },
    { path: config.routes.search, component: SearchDetails },
];
const privataRoutes = [];

export { publicRoutes, privataRoutes };

// Mã này xuất ra hai mảng định nghĩa các đường dẫn (routes) trong ứng dụng, bao gồm publicRoutes và privateRoutes.

// publicRoutes là danh sách các đường dẫn mà người dùng có thể truy cập mà không cần xác thực (không cần đăng nhập). Mỗi phần tử của publicRoutes bao gồm thông tin về path (đường dẫn), component (component được render tương ứng với đường dẫn đó), và layout (thông tin về layout sử dụng cho component, nếu có).

// privateRoutes là danh sách các đường dẫn mà người dùng cần xác thực (đăng nhập) để truy cập. Ở đây không có phần tử nào được định nghĩa trong privateRoutes
