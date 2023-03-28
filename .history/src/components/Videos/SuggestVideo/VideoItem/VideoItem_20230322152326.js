import { Link } from 'react-router-dom';
import Image from '~/components/Image';

function VideoItem({ videoInfo, videoId }) {
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
    return (
        <div>
            <Link>
                <Image src={avatarUrl} />
            </Link>
        </div>
    );
}

export default VideoItem;
