function VideoItem({ videoInfo }) {
    const { description } = videoInfo;
    return <h1>{description}</h1>;
}

export default VideoItem;
