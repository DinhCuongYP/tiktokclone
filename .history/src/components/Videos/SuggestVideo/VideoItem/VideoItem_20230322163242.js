import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const {
        user: {
            first_name: firstName,
            last_name: lastName,
            nickname: userName,
            avatar: avatarUrl,
            bio,
            tick,
            followings_count: followingsCount,
            likes_count: likeCount,
        },
    } = videoInfo;
    const wrapperRef = useRef();

    useEffect(() => {
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className={cx('wrapper')} ref={wrapperRef}></div>;
}

export default VideoItem;
