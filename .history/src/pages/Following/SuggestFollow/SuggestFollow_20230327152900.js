import { useContext, useEffect, useState } from 'react';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './SuggestFollow.module.scss';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import ShowTick from '~/components/ShowTick';
import Button from '~/components/Button';
import { ModalContextKey } from '~/contexts/ModalContext';
import VideoLoading from '~/components/Loadings/VideoLoading';
import VideoPreview from '~/components/Videos/VideoPreview';
const cx = classNames.bind(styles);

function SuggestFollow() {
    const [dataSuggest, setDataSuggest] = useState([]);
    const [idPlay, setIdPlay] = useState(0);

    const { loginModalShow } = useContext(ModalContextKey);

    const defaultLoading = Array(15).fill();

    const handleFollow = (e) => {
        e.preventDefault();
        loginModalShow();
    };

    useEffect(() => {
        const getSuggestFollow = async () => {
            const dataResponse = await accountSevice.getSuggestedAccount(15);
            setDataSuggest(dataResponse);
        };

        getSuggestFollow();
    }, []);

    const renderSuggestList = () => {
        const dataRender = dataSuggest.map((userInfo, index) => {
            const {
                avatar: avatarUrl,
                nickname: username,
                first_name: firstName,
                last_name: lastName,
                tick,
                popular_video: {
                    thumb_url: thumbUrl,
                    file_url: videoUrl,
                    meta: {
                        video: { resolution_x: videoWidth, resolution_y: videoHeight },
                    },
                },
            } = userInfo;

            const vertical = videoHeight / videoWidth > 1.32;

            return (
                <div key={index} className={cx('suggest-item')}>
                    <Link className={cx('content-wrapper')} to={`/@${username}`} target="_blank">
                        <VideoPreview
                            videoId={index}
                            thumbUrl={thumbUrl}
                            videoUrl={videoUrl}
                            playIdState={[idPlay, setIdPlay]}
                            vertical={vertical}
                        >
                            <div className={cx('short-info')}>
                                <Image className={cx('info__avatar')} src={avatarUrl} />
                                <h2 className={cx('info__fullname')}>{`${firstName} ${lastName}`}</h2>
                                <h4 className={cx('info__username')}>
                                    <ShowTick tick={tick} size={12} />
                                    {username}
                                </h4>
                                <Button className={cx('info__follow-btn')} onClick={handleFollow}>
                                    Follow
                                </Button>
                            </div>
                        </VideoPreview>
                    </Link>
                </div>
            );
        });
        return dataRender;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('suggest-list')}>
                {dataSuggest.length === 0
                    ? defaultLoading.map((val, index) => {
                          return (
                              <div key={index} className={cx('suggest-item')}>
                                  <VideoLoading />
                              </div>
                          );
                      })
                    : renderSuggestList()}
            </div>
        </div>
    );
}

export default SuggestFollow;
