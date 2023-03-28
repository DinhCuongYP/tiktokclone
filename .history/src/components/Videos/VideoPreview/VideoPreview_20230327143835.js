import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import Image from '~/components/Image';
import styles from './VideoPreview.module.scss';
const cx = classNames.bind(styles);

function VideoPreview({ children, thumbUrl, videoUrl, videoId, playIdState, vertical = false }) {
    const [idPlay, setIdPlay] = playIdState;
    const videoRef = useRef();

    const isPlaying = videoId === idPlay;

    useEffect(() => {});
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-content', { vertical: vertical, horizontal: !vertical })}>
                <Image src={thumbUrl} alt="" />
                <video src={videoUrl} className={cx({ active: isPlaying })} loop muted />
            </div>
            {children}
        </header>
    );
}

export default VideoPreview;
