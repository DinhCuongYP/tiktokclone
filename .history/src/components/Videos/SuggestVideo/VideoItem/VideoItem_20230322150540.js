function VideoItem({ videoInfo }) {
    const {
        user: {
            first_name: firstName,
            last_name: lastName,
            nickname: userName,
            avatar: avatarUrl,
            bio,
            tick,
            followings_count: followingsCount,
            likes_count: likeCount,
        },
        description,
        music: musicInfo,
        likes_count: likesCount,
        shares_count: sharesCount,
    } = videoInfo;
    return;
}

export default VideoItem;
