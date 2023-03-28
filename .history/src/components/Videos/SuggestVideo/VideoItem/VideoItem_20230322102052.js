import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const wrapperRef = useRef();
    const {
        user: {
            first_name: firstName,
            last_name: lastName,
            nickname: userName,
            avatar: avatarUrl,
            tick,
            bio,
            followings_count: followingsCount,
            likes_count: likeCount,
        },
        description,
        music: musicInfo,
        likes_count: likesCount,
        comments_count: commentsCount,
        shares_count: sharesCount,
    } = videoInfo;

    useLayoutEffect(() => {
        inViewArr[videoId]: {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        }
    }, [])

    return (
        <div ref={wrapperRef} className={cx('wrapper')}>
            <Link to={`/@${userName}`}>
                <Image src={avatarUrl} alt={userName} />
            </Link>
        </div>
    );
}

VideoItem.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
    inViewArr: PropTypes.array,
};

export default VideoItem;
