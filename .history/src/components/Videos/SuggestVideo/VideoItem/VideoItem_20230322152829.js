function VideoItem({ videoInfo, videoId, inViewArr }) {
    const handleTest = () => {
        console.log(1, videoId);
        console.log(2, videoInfo);
    };
    return (
        <div>
            <button onClick={handleTest}>Click</button>
        </div>
    );
}

export default VideoItem;
