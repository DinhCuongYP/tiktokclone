import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SharePopper.module.scss';
import { WrapperPopper } from '~/components/Popper';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SharePopper({ data, children, arrowTop = false, customTippy = {} }) {
    const [showFullList, setShowFullList] = useState(false);

    const currentList = showFullList ? data : data.slice(0, 5);
    const handleRenderItem = (attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('share-wrapper')}>
            <WrapperPopper className={cx('share-popper')}>
                <div data-popper-arrow className={cx('arrow-popper', { arrowTop: arrowTop })} />
                <h1>Aloo</h1>
            </WrapperPopper>
        </div>
    );
    return (
        <TippyHeadless
            {...customTippy}
            render={handleRenderItem}
            visible
            interactive
            placement="top-start"
            popperOptions={{ modifiers: [{ name: 'flip' }, (enable: false)] }}
            offset={[-24, 4]}
            delay={[0, 400]}
        >
            {children}
        </TippyHeadless>
    );
}

SharePopper.propTypes = {
    data: PropTypes.array,
    children: PropTypes.node.isRequired,
    arrowTop: PropTypes.bool,
    customTippy: PropTypes.object,
};

export default SharePopper;
