import { useEffect, useRef } from 'react';

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const wrapperRef = useRef();

    const handleTest = () => {
        console.log(1, videoId);
        console.log(2, videoInfo);
        console.log(3, inViewArr);
    };

    useEffect(() => {
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <button onClick={handleTest}>Click</button>
        </div>
    );
}

export default VideoItem;
