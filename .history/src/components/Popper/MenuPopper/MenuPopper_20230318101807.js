import TippyHeadless from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

function MenuPopper({ children }) {
    return (
        <TippyHeadless visible interactive render={<h1>Aloo</h1>}>
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.node,
};

export default MenuPopper;
