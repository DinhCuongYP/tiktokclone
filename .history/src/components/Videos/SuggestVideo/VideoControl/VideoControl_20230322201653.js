import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
const cx = classNames.bind(styles);

function VideoControl({ videoInfo, videoId }) {
    return <h1>VideoControl</h1>;
}

VideoControl.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
};

export default VideoControl;
