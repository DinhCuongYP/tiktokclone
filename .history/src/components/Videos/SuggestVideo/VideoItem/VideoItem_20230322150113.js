function VideoItem({ videoInfo }) {
    const handleTest = () => {
        console.log(videoInfo);
    };
    return <button onClick={handleTest}>Click 3</button>;
}

export default VideoItem;
