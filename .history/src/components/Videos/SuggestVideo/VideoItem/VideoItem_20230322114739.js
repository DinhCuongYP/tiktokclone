import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

// function VideoItem({ videoInfo, videoId, inViewArr }) {
//     const wrapperRef = useRef();
//     const {
//         user: {
//             avatar: avatarUrl,
//             nickname: userName,
//             first_name: firstName,
//             last_name: lastName,
//             tick,
//             bio,
//             followings_count: followingsCount,
//             likes_count: likeCount,
//         },
//         description,
//         music: musicInfo,
//         likes_count: likesCount,
//         comments_count: commentsCount,
//         shares_count: sharesCount,
//     } = videoInfo;

//     useLayoutEffect(() => {
//         inViewArr[videoId] = {
//             wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
//             inView: null,
//         };

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return (
//         <div ref={wrapperRef} className={cx('wrapper')}>
//             <Link to={'/@' + userName}>
//                 <Image src={avatarUrl} alt={userName} />
//             </Link>
//             <div className={cx('body')}>
//                 <div className={cx('video-info')}>
//                     <Link to={'/@' + userName} className={cx('user-info')}>
//                         <Image src={avatarUrl} />
//                         <p className={cx('name')}>
//                             <span className={cx('user-name')}>
//                                 {userName} <ShowTick tick={tick} />
//                             </span>
//                         </p>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// VideoItem.propTypes = {
//     videoId: PropTypes.number,
//     videoInfo: PropTypes.object.isRequired,
//     inViewArr: PropTypes.array,
// };

// export default VideoItem;

/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
// import { memo, useContext, useLayoutEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames/bind';

// import styles from './VideoItem.module.scss';
// import Button from '~/components/Button';
// import Img from '~/components/Img';
// import SvgIcon from '~/components/SvgIcon';
// import { iconComment, iconHeart, iconMusic, iconShare } from '~/components/SvgIcon/iconsRepo';
// import ShowTick from '~/components/ShowTick';
// import AccountPreview from '~/components/Items/AccountItem/AccountPreview';
// import VideoControl from '../VideoControl';
// import SharePopper from '~/components/Shares/SharePopper';
// import dataTemp from '~/temp/data';

// import { ModalContextKey } from '~/contexts/ModalContext';

// const cx = classNames.bind(styles);

function VideoItem({ videoId, videoInfo, inViewArr }) {
    // Get Modal context value
    // const { loginModalShow } = useContext(ModalContextKey);

    // ref
    const wrapperRef = useRef();

    // get data from temp data
    // const { videoShares } = dataTemp.shares;

    // const currentUser = false;

    // Get data from video info
    const {
        user: {
            avatar: avatarUrl,
            nickname: userName,
            first_name: firstName,
            last_name: lastName,
            tick,
            bio,
            followers_count: followerCount,
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
        <div ref={wrapperRef} className={cx('wrapper')}>
            <Link className={cx('big-avatar')} to={'/@' + userName}>
                <Image className={cx('avatar')} src={avatarUrl} />
            </Link>
            <div className={cx('body')}>
                <div className={cx('video-info')}>
                    {/* User info */}
                    <Link className={cx('user-info')} to={'/@' + userName}>
                        <Image className={cx('avatar', 'small-avatar')} src={avatarUrl} />
                        <p className={cx('name')}>
                            <span className={cx('user-name')}>
                                {userName} <ShowTick tick={tick} />
                            </span>
                            <span className={cx('full-name')}>{`${firstName} ${lastName}`}</span>
                        </p>
                    </Link>
                    <Button outline className={cx('follow-btn')}>
                        Follow
                    </Button>

                    {/* Description  */}
                    <p className={cx('description')}>
                        <span>{description}</span>
                        <a href="#" className={cx('hashtag')}>
                            #tiktok_clone
                        </a>
                    </p>

                    {/* Music info */}
                    <a href="#" className={cx('music-info')}>
                        {/* <SvgIcon className={cx('icon-music')} icon={iconMusic} /> */}
                        {musicInfo || `Nhạc nền - ${firstName} ${lastName}`}
                    </a>
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    videoId: PropTypes.number,
    videoInfo: PropTypes.object.isRequired,
    inViewArr: PropTypes.array,
};

export default memo(VideoItem);