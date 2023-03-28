function VideoItem({ videoInfo, videoId, inViewArr }) {
    const { user, description, music } = videoInfo;

    const handleTest = () => {
        console.log(4, { description });
        console.log(1, videoId);
        console.log(2, videoInfo);
        console.log(3, inViewArr);
    };
    return (
        <div>
            <button onClick={handleTest}>Click</button>
        </div>
    );
}

export default VideoItem;
