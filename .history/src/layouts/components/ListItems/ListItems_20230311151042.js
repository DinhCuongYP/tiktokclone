import classNames from 'classnames/bind';
import styles from './ListItems.module.scss';
const cx = classNames.bind(styles);

function ListItems({ childreen }) {
    return <div className={cx('wrapper')}>{childreen}</div>;
}

export default ListItems;
