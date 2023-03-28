import classNames from 'classnames/bind';
import styles from './VideoPreview.module.scss';
const cx = classNames.bind(styles);

function VideoPreview({ children, thumbUrl, videoUrl, vertical = false }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default VideoPreview;
