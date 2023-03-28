import styles from './FollowingLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
import Sidebar from '../layoutComponents/Sidebar';
import DowloadApp from '~/components/DowloadApp';
const cx = classNames.bind(styles);

function FollowingLayout({ children }) {
    return <div>{children}</div>;
}

export default FollowingLayout;
