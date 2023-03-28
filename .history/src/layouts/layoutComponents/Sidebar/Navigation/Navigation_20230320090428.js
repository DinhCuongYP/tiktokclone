import classNames from 'classnames/bind';
import NavigationItem from './NavigationItem';
import styles from './Navigation.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconHouse, iconHouseRegular } from '~/components/Icons/Icons';
import config from '~/config';
const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <NavigationItem
                title="Dành cho bạn"
                icon={<SvgIcon icon={iconHouse} />}
                iconActive={<SvgIcon icon={iconHouseRegular} />}
                to={config.routes.home}
            />

            <NavigationItem
                title="Dành cho bạn"
                icon={<SvgIcon icon={iconHouse} />}
                iconActive={<SvgIcon icon={iconHouseRegular} />}
                to={config.routes.home}
            />

            <NavigationItem
                title="Dành cho bạn"
                icon={<SvgIcon icon={iconHouse} />}
                iconActive={<SvgIcon icon={iconHouseRegular} />}
                to={config.routes.home}
            />
        </div>
    );
}

export default Navigation;
