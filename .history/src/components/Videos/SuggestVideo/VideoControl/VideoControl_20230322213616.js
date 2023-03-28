import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function VideoControl({ videoInfo, videoId }) {
    const {
        thumb_url: thumbUrl,
        file_url: videoUrl,
        meta: {
            video: { resolution_x: videoWidth, resolution_y: videoHeight },
        },
    } = videoInfo;
    return (
        <div className={cx('player-space')}>
            <Image src={thumbUrl} className={cx('thumb')} alt="" />
            <video>
                <source src={videoUrl} />
            </video>
        </div>
    );
}

VideoControl.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
};

export default VideoControl;
