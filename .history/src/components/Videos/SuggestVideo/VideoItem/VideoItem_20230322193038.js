/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import Button from '~/components/Button';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconMusic } from '~/components/Icons/Icons';
import { ModalContextKey } from '~/contexts/ModalContext';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const { loginModalShow } = useContext(ModalContextKey);

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

    useEffect(() => {
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <Link to={`/@${userName}`} className={cx('big-avatar')}>
                <Image className={cx('avatar')} src={avatarUrl} alt={userName} />
            </Link>
            <div className={cx('body')}>
                <div className={cx('video-info')}>
                    <Link className={cx('user-info')} to={`/@${userName}`}>
                        <Image className={cx('avatar', 'small-avatar')} src={avatarUrl} alt={userName} />
                        <p className={cx('name')}>
                            <span className={cx('user-name')}>
                                {userName} <ShowTick tick={tick} />
                            </span>
                            <span className={cx('full-name')}>{`${firstName} ${lastName}`}</span>
                        </p>
                    </Link>
                    <Button login className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <p className={cx('description')}>
                        <span>{description}</span>
                    </p>

                    <a href="#" className={cx('music-info')}>
                        <SvgIcon className={cx('icon-music')} icon={iconMusic} />
                        {musicInfo && `Nhạc nền - ${firstName} ${lastName}`}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
