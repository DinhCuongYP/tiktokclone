import classNames from 'classnames/bind';
import Button from '../../Button';
import AccountItem from './AccountItem';
import styles from './AccountView.module.scss';
const cx = classNames.bind(styles);

function AccountView() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header-title')}>Tài khoản được đề xuất</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <Button nocolor>
                <p className={cx('seeall')}>Xem Tất Cả</p>
            </Button>
        </div>
    );
}

export default AccountView;
