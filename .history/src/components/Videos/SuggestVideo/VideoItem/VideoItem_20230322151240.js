import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './VideoItem.module.scss';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo }) {
    const { description } = videoInfo;
    return (
        <div className={cx('wrapper')}>
            <h1>{description}</h1>
        </div>
    );
}

export default VideoItem;
