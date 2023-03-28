import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
import styles from './FullSpace.module.scss';
const cx = classNames.bind(styles);

function FullSpace({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>Sidebar</div>
                <div className={cx('wrapper-content')}>
                    <section className={cx('content')}>content</section>
                </div>
            </div>
            <div>DowloadApp</div>
        </div>
    );
}

export default FullSpace;
