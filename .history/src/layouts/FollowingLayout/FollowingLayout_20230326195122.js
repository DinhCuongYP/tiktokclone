import classNames from 'classnames/bind';
import Header from '../layoutComponents/Header';
import styles from './FollowingLayout.module.scss';
const cx = classNames.bind(styles);

function Following({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default Following;
