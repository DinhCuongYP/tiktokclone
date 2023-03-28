import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import Image from '~/components/Image';
import { useContext, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconPauseVideo, iconPlayVideo } from '~/components/Icons/Icons';
import { VideoContextKey } from '~/contexts/VideoContext';
const cx = classNames.bind(styles);

function VideoControl({ videoInfo, videoId }) {
    // State
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [defaultStatus, setDefaultStatus] = useState(true);
    // Ref
    const videoRef = useRef(null);
    // InView State
    const [inViewRef, isInView] = useInView({ threshold: 0.5 });
    // UseContext

    const { inViewArrState
        columeState
        mutedState
        priorityVideoState } = useContext(VideoContextKey)

    const {
        thumb_url: thumbUrl,
        file_url: videoUrl,
        meta: {
            video: { resolution_x: videoWidth, resolution_y: videoHeight },
        },
    } = videoInfo;
    return (
        <div className={cx('player-space')}>
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

            <button className={cx('control', 'play-control')}>
                {playing ? <SvgIcon icon={iconPlayVideo} size={20} /> : <SvgIcon icon={iconPauseVideo} size={20} />}
            </button>

            {}
        </div>
    );
}

VideoControl.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
};

export default VideoControl;
