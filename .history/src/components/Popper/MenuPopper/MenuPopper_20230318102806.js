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
                <div>Test</div>
            </WrapperPopper>
        </div>
    );
    return <TippyHeadless render={renderSearchResult}>{children}</TippyHeadless>;
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
