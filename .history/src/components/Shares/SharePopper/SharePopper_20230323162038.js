import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SharePopper.module.scss';
import { WrapperPopper } from '~/components/Popper';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowToBot2 } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

function SharePopper({ data, children, arrowTop = false, customTippy = {} }) {
    const [showFullList, setShowFullList] = useState(false);

    const handleShowFull = () => {
        return setShowFullList(true);
    };

    const currentList = showFullList ? data : data.slice(0, 5);
    const handleRenderItem = (attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('share-wrapper')}>
            <WrapperPopper className={cx('share-popper')}>
                <div data-popper-arrow className={cx('arrow-popper', { arrowTop: arrowTop })} />
                <div className={cx('share-list')}>
                    {currentList.map((share, index) => (
                        <Button
                            key={index}
                            className={cx('share-item')}
                            iconClassname={cx('share-icon-item')}
                            leftIcon={<SvgIcon icon={share.icon} />}
                            href={share.href}
                            target={share.href && '_blank'}
                        >
                            {share.title}
                        </Button>
                    ))}

                    {data.length > 5 && !showFullList && (
                        <div onClick={handleShowFull} className={cx('icon-seemore')}>
                            <SvgIcon icon={iconArrowToBot2} size={24} />
                        </div>
                    )}
                </div>
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
            popperOptions={{ modifiers: [{ name: 'flip', enable: false }] }}
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
