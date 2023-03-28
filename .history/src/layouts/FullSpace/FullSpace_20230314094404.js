import classNames from 'classnames/bind';
import styles from './FullSpace.module.scss';
const cx = classNames.bind(styles);

function FullSpace() {
    return (
        <div className={cx('wrapper')}>
            <div>Header</div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>Sidebar</div>
                <div className={cx('content')}>content</div>
            </div>
            <div>DowloadApp</div>
        </div>
    );
}

export default FullSpace;
