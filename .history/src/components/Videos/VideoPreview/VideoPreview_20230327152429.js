import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import Image from '~/components/Image';
import styles from './VideoPreview.module.scss';
const cx = classNames.bind(styles);

function VideoPreview({ children, thumbUrl, videoUrl, videoId, playIdState, vertical = false }) {
    const [idPlay, setIdPlay] = playIdState;
    const videoRef = useRef();

    const isPlaying = videoId === idPlay;

    useEffect(() => {
        isPlaying ? videoRef.current.play() : handleResetVideo();
    });

    const handleHover = () => {
        setTimeout(() => {
            !isPlaying && setIdPlay(videoId);
        }, 150);
    };

    const handleResetVideo = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
    };

    return (
        <header className={cx('wrapper')} onMouseOver={handleHover}>
            <div className={cx('inner-content', { vertical: vertical, horizontal: !vertical })}>
                <Image src={thumbUrl} alt="" />
                <video ref={videoRef} src={videoUrl} className={cx({ active: !isPlaying })} loop muted />
            </div>
            {children}
        </header>
    );
}

export default VideoPreview;
