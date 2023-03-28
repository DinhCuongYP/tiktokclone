import classNames from 'classnames/bind';
import styles from './DowloadApp.module.scss';
import Button from '../Button';
import { useRef, useState } from 'react';
import SvgIcon from '../Icons/SvgIcon';
import { iconCloseX, iconMobile, iconPc, iconArrowToTop } from '../Icons/Icons';
import { WrapperPopper } from '../Popper';
const cx = classNames.bind(styles);

function DowloadApp() {
    const [showIconScroll, setShowIconScroll] = useState(false);
    const [active, setActive] = useState(false);

    // UseRef
    const wrapperRef = useRef(null);

    // Funciton

    const handleToggleActive = () => {
        setActive(!active);
    };

    //
    return (
        <div
            className={cx('wrapper', {
                'show-icon-scroll': showIconScroll,
            })}
            ref={wrapperRef}
        >
            <div className={cx('download-app')}>
                <Button onCkick={handleToggleActive} className={cx('main-down-btn', { active })} upload>
                    Tải ứng dụng
                </Button>

                <div className={cx('download-for', { active: !active })}>
                    <WrapperPopper className={cx('download-content')}>
                        <Button className={cx('download-btn')} leftIcon={<SvgIcon icon={iconPc} size={21} />}>
                            Tải TikTok dành cho máy tính để bàn
                        </Button>

                        <div className={cx('hr')}></div>

                        <Button className={cx('download-btn')} leftIcon={<SvgIcon icon={iconMobile} size={21} />}>
                            Tải ứng dụng TikTok
                        </Button>

                        <button className={cx('close-btn')}>
                            <SvgIcon icon={iconCloseX} size={20} />
                        </button>
                    </WrapperPopper>
                </div>
            </div>
            <p className={cx('scroll-to-top')}>
                <SvgIcon icon={iconArrowToTop} className={cx('icon-scroll')} />
            </p>
        </div>
    );
}

export default DowloadApp;
