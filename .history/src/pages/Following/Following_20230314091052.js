import classNames from 'classnames/bind';
import styles from './Following.module.scss';
const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <h1>Header</h1>
            <div className={cx('container')}>
                <div>SideBar</div>
                <div>Content</div>
            </div>
        </div>
    );
}

export default Following;
