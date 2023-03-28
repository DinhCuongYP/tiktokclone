import TippyHeadless from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

function MenuPopper({ children }) {
    return <TippyHeadless>{children}</TippyHeadless>;
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
