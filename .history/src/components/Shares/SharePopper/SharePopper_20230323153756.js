import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SharePopper.module.scss';
const cx = classNames.bind(styles);

function SharePopper({ data, children, arrowTop = false }) {
    const [showFullList, setShowFullList] = useState(false);

    const currentList = showFullList ? data : data.slice(0, 5);
    const handleRenderItem = (attrs) => {
        <div tabIndex="-1" {...attrs} className={cx('share-wrapper')}>
            <div data-popper-arrow className={cx('arrow-popper', { arrowTop: arrowTop })} />
        </div>;
    };
    return <TippyHeadless>{children}</TippyHeadless>;
}

export default SharePopper;
