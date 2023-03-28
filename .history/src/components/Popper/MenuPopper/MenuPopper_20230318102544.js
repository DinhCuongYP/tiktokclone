import TippyHeadless from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import WrapperPopper from '../Wrapper/WrapperPopper';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
const cx = classNames.bind(styles);

function MenuPopper({ children }) {
    const renderSearchResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <WrapperPopper>
                <div className={cx('title-search_title')}>Tài Khoản</div>
                {searchResult.map((accounItem) => (
                    <SearchAccountItem key={accounItem.id} accountInfo={accounItem} onClick={handleClearValueSearch} />
                ))}

                {/*  */}

                <Link
                    className={cx('search-seeall')}
                    to={`${config.routes.search}?q=${searchValue}`}
                    onClick={handleBlurValueSearch}
                >
                    Xem tất cả kết quả cho "{searchValue}"
                </Link>
            </WrapperPopper>
        </div>
    );
    return (
        <TippyHeadless visible interactive render={renderSearchResult}>
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
