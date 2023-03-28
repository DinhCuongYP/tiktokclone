import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
const cx = classNames.bind(styles);

function HeaderOnly() {
    return (
        <div className={cx('wrapper')}>
            <div>Header</div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default HeaderOnly;
