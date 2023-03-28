import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './SearchAccountItem.module.scss';
const cx = classNames.bind(styles);

function SearchAccountItem({ accountInfo, className, onClick }) {
    const { avatar: avatarUrl, full_name: fullName, nickname: userName, tick } = accountInfo;
    return (
        <Link>
            <Image className={cx('avatar')} src={avatarUrl} alt={fullName} />
            <div className={cx('body')}>
                <h4 className={cx('username')}>{userName}</h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default SearchAccountItem;
