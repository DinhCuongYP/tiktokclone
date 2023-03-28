import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import styles from './SearchAccountItem.module.scss';
const cx = classNames.bind(styles);

function SearchAccountItem({ accountInfo, className, onClick }) {
    const { avatar: avatarUrl, full_name: fullName, nickname: userName, tick } = accountInfo;
    return (
        <Link to={`/@${userName}`} className={cx('wrapper', { [className]: className })} onClick={onClick}>
            <div>Accout</div>
            <Image className={cx('avatar')} src={avatarUrl} alt={fullName} />
            <div className={cx('body')}>
                <h4 className={cx('username')}>{userName}</h4>
                <ShowTick tick={tick} />
                <p className={cx('name')}>{fullName}</p>
            </div>
        </Link>
    );
}

export default SearchAccountItem;

// Đây là một file module JavaScript để hiển thị thông tin tài khoản được tìm kiếm trong một ứng dụng web sử dụng React framework. Nó import các thành phần như classNames, Link, Image và styles từ các modules khác để sử dụng trong component SearchAccountItem.

// Component SearchAccountItem nhận vào một object accountInfo chứa thông tin về tài khoản như avatarUrl, fullName, userName, tick và một số props khác như className và onClick. Nó hiển thị thông tin tài khoản này trong một Link bao gồm ảnh đại diện (avatarUrl), tên đầy đủ (fullName) và tên người dùng (userName). Các classes CSS được xác định trong styles được thêm vào các elements HTML trong component bằng cách sử dụng classNames và bind.
