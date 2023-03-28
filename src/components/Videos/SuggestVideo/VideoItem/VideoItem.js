/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import Button from '~/components/Button';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconComment, iconHeart, iconMusic, iconShare } from '~/components/Icons/Icons';
import { ModalContextKey } from '~/contexts/ModalContext';
import AccountPreview from '~/components/Items/AccountItem/AccountPreview';
import VideoControl from '../VideoControl';
import PropTypes from 'prop-types';
import dataTemp from '~/temp/data';
import SharePopper from '~/components/Shares/SharePopper';

const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const { loginModalShow } = useContext(ModalContextKey);

    const { videoShares } = dataTemp.shares;

    const {
        user: {
            first_name: firstName,
            last_name: lastName,
            nickname: userName,
            avatar: avatarUrl,
            bio,
            tick,
            followers_count: followersCount,
            likes_count: likeCount,
        },
        description,
        music: musicInfo,
        likes_count: likesCount,
        comments_count: commentsCount,
        shares_count: sharesCount,
    } = videoInfo;
    const wrapperRef = useRef();

    useLayoutEffect(() => {
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <Link to={`/@${userName}`} className={cx('big-avatar')}>
                <AccountPreview
                    avatarUrl={avatarUrl}
                    userName={userName}
                    followersCount={followersCount}
                    likesCount={likeCount}
                    fullName={`${firstName} ${lastName}`}
                    customTippy={{ delay: [1000, 500], offset: [0, 6] }}
                    tick={tick}
                    bio={bio}
                >
                    <Image className={cx('avatar')} src={avatarUrl} alt={userName} />
                </AccountPreview>
            </Link>
            <div className={cx('body')}>
                <div className={cx('video-info')}>
                    <Link className={cx('user-info')} to={`/@${userName}`}>
                        <Image className={cx('avatar', 'small-avatar')} src={avatarUrl} alt={userName} />
                        <p className={cx('name')}>
                            <AccountPreview
                                avatarUrl={avatarUrl}
                                userName={userName}
                                followersCount={followersCount}
                                likesCount={likeCount}
                                fullName={`${firstName} ${lastName}`}
                                customTippy={{ delay: [1000, 500], offset: [0, 6] }}
                                tick={tick}
                                bio={bio}
                            >
                                <span className={cx('user-name')}>
                                    {userName} <ShowTick tick={tick} />
                                </span>
                            </AccountPreview>
                            <span className={cx('full-name')}>{`${firstName} ${lastName}`}</span>
                        </p>
                    </Link>
                    <Button onClick={loginModalShow} login className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <p className={cx('description')}>
                        <span>{description}</span>
                    </p>

                    <a href="#" className={cx('music-info')}>
                        <SvgIcon className={cx('icon-music')} icon={iconMusic} />
                        {musicInfo || `Nhạc nền - ${firstName} ${lastName}`}
                    </a>
                </div>

                <div className={cx('video-player')}>
                    <VideoControl videoInfo={videoInfo} videoId={videoId} />
                    <div className={cx('interactive-space')}>
                        <label className={cx('interactive-item')}>
                            <button className={cx('item-icon')}>
                                <SvgIcon icon={iconHeart} />
                            </button>
                            <strong className={cx('item-count')}>{likesCount}</strong>
                        </label>

                        <label className={cx('interactive-item')}>
                            <button className={cx('item-icon')}>
                                <SvgIcon icon={iconComment} />
                            </button>
                            <strong className={cx('item-count')}>{commentsCount}</strong>
                        </label>

                        <SharePopper data={videoShares}>
                            <label className={cx('interactive-item')}>
                                <button className={cx('item-icon')}>
                                    <SvgIcon icon={iconShare} />
                                </button>
                                <strong className={cx('item-count')}>{sharesCount}</strong>
                            </label>
                        </SharePopper>
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    videoInfo: PropTypes.object.isRequired,
    videoId: PropTypes.number,
    inViewArr: PropTypes.array,
};

export default VideoItem;
