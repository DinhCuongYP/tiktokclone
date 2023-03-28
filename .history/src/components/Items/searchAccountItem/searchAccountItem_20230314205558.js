import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './SearchAccountItem.module.scss';
const cx = classNames.bind(styles);

function SearchAccountItem({ data }) {
    return (
        <Link>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <span>{data.full_name}</span>
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default SearchAccountItem;
