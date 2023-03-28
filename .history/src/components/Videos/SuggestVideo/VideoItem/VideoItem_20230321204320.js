function VideoItem({ videoInfo }) {
    const {
        user: {
            first_name: firstName,
            last_name: lastName,
            nickname: nickName,
            avatar: avatarUrl,
            tick,
            bio,
            followings_count: followingsCount,
            likes_count: likesCount,
        },
        description,
        music: musicInfo,
        likes_count: likesCount,
        comments_count: commentsCount,
        shares_count: sharesCount,
    } = videoInfo;
    return <h1>VideoItem</h1>;
}

export default VideoItem;
