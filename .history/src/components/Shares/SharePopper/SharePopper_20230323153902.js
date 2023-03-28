import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SharePopper.module.scss';
import { WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);

function SharePopper({ data, children, arrowTop = false }) {
    const [showFullList, setShowFullList] = useState(false);

    const currentList = showFullList ? data : data.slice(0, 5);
    const handleRenderItem = (attrs) => {
        <div tabIndex="-1" {...attrs} className={cx('share-wrapper')}>
            <div data-popper-arrow className={cx('arrow-popper', { arrowTop: arrowTop })} />
            <WrapperPopper className={cx('share-popper', { seeFull: showFullList })}>
                <h1>Aloo</h1>
            </WrapperPopper>
        </div>;
    };
    return <TippyHeadless>{children}</TippyHeadless>;
}

export default SharePopper;
