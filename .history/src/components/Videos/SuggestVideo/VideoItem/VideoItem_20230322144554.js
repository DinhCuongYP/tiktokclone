import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const wrapperRef = useRef();
    const {
        user: {
            avatar: avatarUrl,
            nickname: userName,
            first_name: firstName,
            last_name: lastName,
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
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>Click Me</div>
        // <div ref={wrapperRef} className={cx('wrapper')}>
        //     <Link className={cx('big-avatar')} to={`/@${userName}`}>
        //         <Image className={cx('avatar')} src={avatarUrl} />
        //     </Link>
        //     <div className={cx('body')}>
        //         <div className={cx('video-info')}>
        //             <Link to={`/@${userName}`} className={cx('user-info')}>
        //                 <Image src={avatarUrl} className={cx('avatar', 'small-avartar')} />
        //                 <p className={cx('name')}>
        //                     <span className={cx('user-name')}>
        //                         {userName} <ShowTick tick={tick} />
        //                     </span>
        //                     <span className={cx('full-name')}>{`${firstName} ${lastName}`}</span>
        //                 </p>
        //             </Link>

        //             <Button upload className={cx('follow-btn')}>
        //                 Follow
        //             </Button>
        //         </div>
        //     </div>
        // </div>
    );
}

VideoItem.propTypes = {
    videoId: PropTypes.number,
    videoInfo: PropTypes.object.isRequired,
    inViewArr: PropTypes.array,
};

export default VideoItem;
