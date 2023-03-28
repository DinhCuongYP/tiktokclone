import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './VideoPreview.module.scss';
const cx = classNames.bind(styles);

function VideoPreview({ children, thumbUrl, videoUrl, videoId, playIdState, vertical = false }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-content')}>
                <Image src={thumbUrl} alt="" />
                <video src={videoUrl} loop muted />
            </div>
            {children}
        </header>
    );
}

export default VideoPreview;
