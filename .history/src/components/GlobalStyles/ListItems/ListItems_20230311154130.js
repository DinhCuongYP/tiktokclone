import classNames from 'classnames/bind';
import styles from './ListItems.module.scss';
const cx = classNames.bind(styles);

function ListItems({ children }) {
    return <div>{children}</div>;
}

export default ListItems;
