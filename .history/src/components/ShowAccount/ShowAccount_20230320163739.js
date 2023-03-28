import AccountItem from '../Items/AccountItem';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShowAccount.module.scss';
import BorderTopContainer from '../BorderTopContainer';
const cx = classNames.bind(styles);

function ShowAccount({ title, accountItems }) {
    return (
        <BorderTopContainer className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('content')}>
                {accountItems.map((item, index) => (
                    <AccountItem key={index} accountInfo={item} />
                ))}
            </div>
        </BorderTopContainer>
    );
}

ShowAccount.propTypes = {
    title: PropTypes.string,
    accountItems: PropTypes.array.isRequired,
};

export default ShowAccount;
