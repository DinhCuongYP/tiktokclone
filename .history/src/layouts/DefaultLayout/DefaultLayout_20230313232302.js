import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Content from '~/layouts/components/Content';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            {/* <Header /> */} <h1>Header</h1>
            <div className={cx('container')}>
                {/* <Sidebar /> */} <h2>Sidebar</h2>
                {/* <Content /> */} <h2>Content</h2>
            </div>
        </div>
    );
}

export default DefaultLayout;
