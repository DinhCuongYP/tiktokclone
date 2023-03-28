/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useState } from 'react';
import LoginNotify from './LoginNotify';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';
import SuggestedAccount from './SuggestedAccount';
import { Scrollbars as CustomScrollbar } from 'react-custom-scrollbars-2';
import Discover from './Discover';
import BorderTopContainer from '~/components/BorderTopContainer';

const cx = classNames.bind(styles);

function Sidebar() {
    const [hideScrollbar, setHideScrollbar] = useState(true);
    const customScrollbar = (classname) => {
        return (props) => <div className={cx(classname)} {...props}></div>;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <CustomScrollbar
                    hideTracksWhenNotNeeded
                    autoHide={hideScrollbar}
                    autoHideTimeout={0}
                    renderView={customScrollbar('scrollbar-view')}
                    renderTrackVertical={customScrollbar('scrollbar-track')}
                    renderThumbVertical={customScrollbar('scrollbar-thumb')}
                    onMouseEnter={() => setHideScrollbar(false)}
                    onMouseLeave={() => setHideScrollbar(true)}
                >
                    <div className={cx('content')}>
                        <Navigation />
                        <LoginNotify />
                        <SuggestedAccount />
                        <Discover />
                        <BorderTopContainer className={cx('container-footer')}>
                            <p className={cx('link-list')}>
                                <a href="#" className={cx('link-item')}>
                                    Giới thiệu
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    TikTok Browse
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Bảng tin
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Liên Hệ
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Sự nghiệp
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    ByteDance
                                </a>
                            </p>

                            <p className={cx('link-list')}>
                                <a href="#" className={cx('link-item')}>
                                    TikTok for Good
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Quảng cáo
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Developers
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Transparency
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    TikTok Rewards
                                </a>
                            </p>

                            <p className={cx('link-list')}>
                                <a href="#" className={cx('link-item')}>
                                    Trợ giúp
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    An toàn
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Điều khoản
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Quyền riêng tư
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Creator Portal
                                </a>
                                <a href="#" className={cx('link-item')}>
                                    Hướng dẫn cộng đồng
                                </a>
                            </p>

                            <p className={cx('link-list')}>
                                <span className={cx('footer-more')}>Thêm</span>
                            </p>

                            <span className={cx('footer-coppyright')}>© 2022 TikTok - Clone by anghiadx</span>
                        </BorderTopContainer>
                    </div>
                </CustomScrollbar>
            </div>
        </div>
    );
}

export default Sidebar;
