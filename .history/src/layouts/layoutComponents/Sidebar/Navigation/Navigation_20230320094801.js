import classNames from 'classnames/bind';
import NavigationItem from './NavigationItem';
import styles from './Navigation.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import {
    iconFriend,
    iconHouse,
    iconHouseRegular,
    iconLive,
    iconLiveRegular,
    inconFriendRegular,
} from '~/components/Icons/Icons';
import config from '~/config';
const cx = classNames.bind(styles);

function Navigation() {
    return (
        <nav className={cx('wrapper')}>
            <NavigationItem
                title="Dành cho bạn"
                icon={<SvgIcon icon={iconHouseRegular} />}
                iconActive={<SvgIcon icon={iconHouse} />}
                to={config.routes.home}
            />

            <NavigationItem
                title="Đang Follow"
                icon={<SvgIcon icon={iconFriend} />}
                iconActive={<SvgIcon icon={inconFriendRegular} />}
                to={config.routes.following}
            />

            <NavigationItem
                title="Live"
                icon={<SvgIcon icon={iconLive} />}
                iconActive={<SvgIcon icon={iconLiveRegular} />}
                to={config.routes.live}
            />
        </nav>
    );
}

export default Navigation;
