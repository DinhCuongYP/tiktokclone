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
            followers_count: followersCount,
        },
        description,
        music,
    } = videoInfo;
    return <h1>VideoItem</h1>;
}

export default VideoItem;
