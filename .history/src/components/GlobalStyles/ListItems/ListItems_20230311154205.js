import classNames from 'classnames/bind';
import styles from './ListItems.module.scss';
const cx = classNames.bind(styles);

function ListItems({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default ListItems;
