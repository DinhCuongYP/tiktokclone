import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import ModalWrapper from '../ModalWrapper';
import { useState } from 'react';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconCloseX } from '~/components/Icons/Icons';
import VideoPlayer from '~/components/Videos/VideoPlayer/VideoPlayer';

const cx = classNames.bind(styles);

function VideoModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);

    const handleCloseModal = () => {
        setIsClose(true);
    };

    return (
        <ModalWrapper className={cx('wrapper')} isClose={isClose} onClose={handleClose}>
            <button onClick={handleCloseModal}>
                <SvgIcon icon={iconCloseX} />
            </button>
            <div className={cx('video-container')}>
                <VideoPlayer />
            </div>
            <div className={cx('content-container')}></div>
        </ModalWrapper>
    );
}

export default VideoModal;
