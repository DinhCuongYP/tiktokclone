import classNames from 'classnames/bind';
import styles from './DowloadApp.module.scss';
import Button from '../Button';
import { useContext, useEffect, useRef, useState } from 'react';
import SvgIcon from '../Icons/SvgIcon';
import { iconCloseX, iconMobile, iconPc, iconArrowToTop } from '../Icons/Icons';
import { WrapperPopper } from '../Popper';
import { ModalContextKey } from '~/contexts/ModalContext';
const cx = classNames.bind(styles);

function DowloadApp() {
    const [showIconScroll, setShowIconScroll] = useState(false);
    const [active, setActive] = useState(true);
    const { downloadMobileShow } = useContext(ModalContextKey);

    // UseRef
    const wrapperRef = useRef(null);

    // UseEffect
    useEffect(() => {
        window.addEventListener('scroll', handleWhenScrolling);

        return () => {
            window.removeEventListener('scroll', handleWhenScrolling);
        };
    }, []);

    // Funciton

    const handleClickMobile = () => {
        downloadMobileShow();
        handleToggleActive();
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleToggleActive = () => {
        setActive(!active);
    };

    const handleWhenScrolling = () => {
        if (window.scrollY > 0) {
            setShowIconScroll(true);
        } else {
            setShowIconScroll(false);
        }
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
                <Button onClick={handleToggleActive} className={cx('main-down-btn', { active })} upload>
                    Tải ứng dụng
                </Button>

                <div className={cx('download-for', { active: !active })}>
                    <WrapperPopper className={cx('download-content')}>
                        <Button className={cx('download-btn')} leftIcon={<SvgIcon icon={iconPc} size={21} />}>
                            Tải TikTok dành cho máy tính để bàn
                        </Button>

                        <div className={cx('hr')}></div>

                        <Button
                            onClick={handleClickMobile}
                            className={cx('download-btn')}
                            leftIcon={<SvgIcon icon={iconMobile} size={21} />}
                        >
                            Tải ứng dụng TikTok
                        </Button>

                        <button onClick={handleToggleActive} className={cx('close-btn')}>
                            <SvgIcon icon={iconCloseX} size={20} />
                        </button>
                    </WrapperPopper>
                </div>
            </div>
            <p className={cx('scroll-to-top')}>
                <SvgIcon onClick={handleScrollToTop} icon={iconArrowToTop} className={cx('icon-scroll')} />
            </p>
        </div>
    );
}

export default DowloadApp;
