import TippyHeadless from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import WrapperPopper from '../Wrapper/WrapperPopper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function MenuPopper({ children }) {
    return (
        <TippyHeadless
            visible
            interactive
            render={
                <WrapperPopper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h1>Test</h1>
                    </div>
                </WrapperPopper>
            }
        >
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
