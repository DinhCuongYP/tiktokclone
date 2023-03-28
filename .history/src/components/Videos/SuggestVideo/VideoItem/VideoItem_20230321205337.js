import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo }) {
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
    return <h1>Aloo</h1>;
}

VideoItem.propTypes = {
    videoInfo: PropTypes.object.isRequired,
};

export default VideoItem;
