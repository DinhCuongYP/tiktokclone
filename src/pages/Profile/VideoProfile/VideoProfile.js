import styles from './VideoProfile.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconLock, iconPlayRegular } from '~/components/Icons/Icons';
import VideoLoading from '~/components/Loadings/VideoLoading';
import { useEffect, useMemo, useState } from 'react';
import VideoPreview from '~/components/Videos/VideoPreview';
const cx = classNames.bind(styles);

function VideoProfile({ data, user }) {
    const [playId, setPlayId] = useState(0);
    const [listType, setListType] = useState('video');

    const [videos, likedVideos] = data || [];

    const defaultVideoLoading = Array(12).fill();

    const currentList = useMemo(() => {
        switch (listType) {
            case 'like-videos':
                return likedVideos;
            case 'videos':
            default:
                return videos;
        }
    }, [videos, listType, likedVideos]);

    useEffect(() => {
        setPlayId(0);
        setListType('video');
    }, [data]);

    const renderVideos = () => {
        let dataRender;

        if (data === null) {
            dataRender = defaultVideoLoading.map((value, index) => {
                return (
                    <div key={index} className={cx('video-item')}>
                        <VideoLoading />
                    </div>
                );
            });
        } else {
            dataRender = currentList.map((video, index) => {
                const {
                    thumb_url: thumbUrl,
                    file_url: videoUrl,
                    description,
                    views_count: viewsCount,
                    meta: {
                        video: { resolution_x: videoWidth, resolution_y: videoHeight },
                    },
                } = video;

                const verticalVideo = videoHeight / videoWidth > 1.32;

                return (
                    <div key={index} className={cx('video-item')}>
                        <div className={cx('item-content')}>
                            <VideoPreview
                                videoId={index}
                                videoUrl={videoUrl}
                                thumbUrl={thumbUrl}
                                vertical={verticalVideo}
                                playIdState={[playId, setPlayId]}
                            />

                            <p className={cx('content_view-count')}>
                                <SvgIcon icon={iconPlayRegular} size={18} />
                                <strong>{viewsCount}</strong>
                            </p>
                        </div>
                        <p className={cx('item-title')}>{description}</p>
                    </div>
                );
            });
        }

        return dataRender;
    };

    return (
        <section className={cx('video-container')}>
            <div className={cx('tab-list')}>
                <div className={cx('tab-item')}>Video</div>

                <div className={cx('tab-item')}>
                    <SvgIcon icon={iconLock} size={16} />
                    <span>Đã thích</span>
                </div>

                <div className={cx('tab-line')}></div>
            </div>

            <div className={cx('video-list')}>{renderVideos()}</div>
        </section>
    );
}

VideoProfile.propTypes = {
    data: PropTypes.array,
    user: PropTypes.string,
};

export default VideoProfile;
