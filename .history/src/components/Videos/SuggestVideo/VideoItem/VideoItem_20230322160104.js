import { useEffect, useRef } from 'react';

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const wrapperRef = useRef();

    const handleTest = () => {
        console.log(1, videoId);
        console.log(2, videoInfo);
        console.log(3, inViewArr);
    };

    return (
        <div ref={wrapperRef}>
            <button onClick={handleTest}>Click</button>
        </div>
    );
}

export default VideoItem;
