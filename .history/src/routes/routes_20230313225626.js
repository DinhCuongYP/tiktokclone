import { Home, Following, Upload, Profile, Live, SearchDetails } from '~/pages';
import config from '~/config';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.searchDetails, component: SearchDetails },
];
const privataRoutes = [];

export { publicRoutes, privataRoutes };
