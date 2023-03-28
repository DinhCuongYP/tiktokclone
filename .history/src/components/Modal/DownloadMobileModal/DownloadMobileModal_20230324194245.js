/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useState } from 'react';
import image from '~/assets/image';
import { iconCloseX } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import ModalWrapper from '../ModalWrapper';
import styles from './DownloadMobileModal.module.scss';
const cx = classNames.bind(styles);

function DownloadMobileModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    return (
        <ModalWrapper className={cx('modal-wrapper')} isClose={isClose} onClose={handleClose}>
            <button className={cx('close-btn')}>
                <SvgIcon icon={iconCloseX} size={24} />
            </button>
            <h2 className={cx('big-title')}>Tải ứng dụng TikTok</h2>

            {/* <div className={cx('download-with-qr')}>
                <h3 className={cx('title')}>Hãy quét mã QR để tải TikTok về máy</h3>
                <div className={cx('qr-space')}>
                    <img src={image.fbQR} alt="QR" />
                </div>
            </div> */}

            <div className={cx('download-with-store')}>
                <h3 className={cx('title')}>Tải về từ cửa hàng ứng dụng</h3>
                <div className={cx('store-list')}>
                    <a className={cx('store-item')} href="#" target="_blank" ref="noreferrer">
                        <img src={image.downloadWithMicrosorf} alt="Download With Microsorf" />
                    </a>
                </div>
            </div>
        </ModalWrapper>
    );
}

export default DownloadMobileModal;
