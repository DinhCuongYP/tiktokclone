import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import Image from '~/components/Image';
import { useContext, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconFlag, iconPauseVideo, iconPlayVideo, iconVolume } from '~/components/Icons/Icons';
import { VideoContextKey } from '~/contexts/VideoContext';
const cx = classNames.bind(styles);

function VideoControl({ videoInfo, videoId }) {
    // State
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [defaultStatus, setDefaultStatus] = useState(true);
    // Ref
    const videoRef = useRef(null);
    const volumeBarRef = useRef(null);
    const volumeDotRef = useRef(null);
    // InView State
    const [inViewRef, isInView] = useInView({ threshold: 0.5 });
    // UseContext
    const { inViewArrState, volumeState, mutedState, priorityVideoState } = useContext(VideoContextKey);

    const [inViewArr, setInViewArr] = inViewArrState;
    const [volume, setvolume] = volumeState;
    const [muted, setMuted] = mutedState;
    const [priorityVideo, setPriorityVideo] = priorityVideoState;

    //
    const {
        thumb_url: thumbUrl,
        file_url: videoUrl,
        meta: {
            video: { resolution_x: videoWidth, resolution_y: videoHeight },
        },
    } = videoInfo;

    //
    const directionVideoClass = videoWidth - videoHeight < 0 ? 'vertical' : 'horizontal';

    //
    return (
        <div className={cx('player-space', directionVideoClass)}>
            <p className={cx('default-space')}></p>
            <Image ref={inViewRef} src={thumbUrl} className={cx('thumb')} alt="" />
            <video
                className={cx('video', { hidden: defaultStatus })}
                loop
                onWaiting={() => setLoading(true)}
                onPlaying={() => setLoading(false)}
                ref={videoRef}
            >
                <source src={videoUrl} />
            </video>

            <button className={cx('control', 'report-btn')}>
                <SvgIcon icon={iconFlag} />
                <span>Báo Cáo</span>
            </button>

            <button className={cx('control', 'play-control')}>
                {playing ? <SvgIcon icon={iconPlayVideo} size={20} /> : <SvgIcon icon={iconPauseVideo} size={20} />}
            </button>

            {/* {muted ? (
                <button className={cx('control', 'volume-btn', 'mute')}>
                    <SvgIcon icon={muted} size={24} />
                </button>
            ) : (
                <button className={cx('control', 'volume-btn')}>
                    <SvgIcon icon={iconVolume} size={24} />
                </button>
            )} */}

            <div className={cx('volume-control')}>
                <div className={cx('volume-bar')} ref={volumeBarRef}>
                    <div className={cx('volume-dot')} ref={volumeDotRef}></div>
                </div>
            </div>
        </div>
    );
}

VideoControl.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
};

export default VideoControl;
