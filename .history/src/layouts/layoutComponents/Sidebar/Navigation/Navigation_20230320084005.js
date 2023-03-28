import classNames from 'classnames/bind';
import NavigationItem from './NavigationItem';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <NavigationItem />
        </div>
    );
}

export default Navigation;
