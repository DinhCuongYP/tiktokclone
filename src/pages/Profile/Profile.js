import { useContext, useEffect, useState } from 'react';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';
import { accountSevice } from '~/sevices';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconBlock, iconFlag, iconSeeMoreHorizontal, iconShare, iconShareRegular } from '~/components/Icons/Icons';
import SharePopper from '~/components/Shares/SharePopper';
import dataTemp from '~/temp/data';
import Image from '~/components/Image';
import TippyHeadless from '@tippyjs/react/headless';
import { WrapperPopper } from '~/components/Popper';
import VideoProfile from './VideoProfile';
import { ModalContextKey } from '~/contexts/ModalContext';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const { loginModalShow } = useContext(ModalContextKey);

    const { videoShares } = dataTemp.shares;

    // eslint-disable-next-line no-unused-vars
    const {
        first_name: firstName,
        last_name: lastName,
        nickname: username,
        avatar: avatarUrl,
        bio,
        tick,
        followings_count: followingsCount,
        followers_count: followersCount,
        likes_count: likesCount,
        website_url: websiteAddress,
    } = infoUser || {};

    const { username: usernameParams } = useParams();

    useEffect(() => {
        const getUserInfo = async () => {
            const dataResponse = await accountSevice.getUserAccount(usernameParams);

            setInfoUser(dataResponse);

            const videos = dataResponse?.videos;
            const likedVideos = [];

            setVideoData([videos, likedVideos]);
        };

        getUserInfo();
        setInfoUser(null);
        setVideoData(null);
    }, [usernameParams]);

    return (
        <div className={cx('wrapper')}>
            {!!infoUser && (
                <header className={cx('user-container')}>
                    <div className={cx('action')}>
                        <SharePopper data={videoShares}>
                            <span className={cx('icon')}>
                                <SvgIcon icon={iconShareRegular} />
                            </span>
                        </SharePopper>

                        <TippyHeadless
                            placement="bottom-end"
                            delay={[0, 400]}
                            offset={[4, 10]}
                            interactive
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    <WrapperPopper className={cx('more-popper')}>
                                        <div className={cx('arrow-popper')} data-popper-arrow />
                                        <Button
                                            className={cx('more-item')}
                                            textClassname={cx('item-text')}
                                            upload
                                            leftIcon={<SvgIcon icon={iconShare} size={16} />}
                                        >
                                            Báo Cáo
                                        </Button>

                                        <Button
                                            className={cx('more-item')}
                                            textClassname={cx('item-text')}
                                            upload
                                            leftIcon={<SvgIcon icon={iconBlock} size={16} />}
                                        >
                                            Chặn
                                        </Button>
                                    </WrapperPopper>
                                </div>
                            )}
                        >
                            <span className={cx('icon')}>
                                <SvgIcon icon={iconSeeMoreHorizontal} />
                            </span>
                        </TippyHeadless>
                    </div>

                    <div className={cx('account-info')}>
                        <Image src={avatarUrl} alt="avartar" className={cx('avartar')} />
                        <div>
                            <h2 className={cx('account-username')}>{username}</h2>
                            <h1 className={cx('account-fullname')}>{`${firstName} ${lastName}`}</h1>
                            <Button className={cx('btn-follow')} onClick={loginModalShow} login>
                                Follow
                            </Button>
                        </div>
                    </div>

                    <div className={cx('count-info')}>
                        <strong className={cx('num-count')}>{followersCount}</strong>
                        <strong className={cx('title-count')}>Đang Follow</strong>
                        <strong className={cx('num-count')}>{followingsCount}</strong>
                        <strong className={cx('title-count')}>Follower</strong>
                        <strong className={cx('num-count')}>{likesCount}</strong>
                        <strong className={cx('title-count')}>Thích</strong>
                    </div>

                    <p className={cx('bio-info')}>{bio}</p>
                </header>
            )}

            <VideoProfile data={videoData} user={username} />
        </div>
    );
}

export default Profile;
