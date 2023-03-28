import AccountItem from '../Items/AccountItem';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShowAccount.module.scss';
import BorderTopContainer from '../BorderTopContainer';
import AccountLoading from '../Loadings/AccountLoading';
const cx = classNames.bind(styles);

function ShowAccount({ hoverActivate, title, accountItems, btnTitle, onClick, loading = false }) {
    const isLoad = loading || accountItems.length === 0;
    return (
        <BorderTopContainer className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('content')}>
                {accountItems.map((item, index) => (
                    <AccountItem hoverActivate={hoverActivate} key={index} accountInfo={item} />
                ))}
            </div>

            {(isLoad && <AccountLoading />) || (
                <b className={cx('seeall-btn')} onClick={onClick}>
                    {btnTitle}
                </b>
            )}
        </BorderTopContainer>
    );
}

ShowAccount.propTypes = {
    title: PropTypes.string,
    accountItems: PropTypes.array.isRequired,
    btnTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ShowAccount;
