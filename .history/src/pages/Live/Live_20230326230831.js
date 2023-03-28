import classNames from 'classnames/bind';
import LiveLoading from '~/components/Loadings/LiveLoading';
import styles from './Live.module.scss';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <h1>aLo</h1>
        </div>
    );
}

export default Live;
