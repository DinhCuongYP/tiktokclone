import TippyHeadless from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

function MenuPopper({ children }) {
    return (
        <TippyHeadless visible interactive element={<h1>Alo</h1>}>
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
