import { useState } from 'react';
import VideoContext from '~/contexts/VideoContext';
import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    const [inViewArr, setInViewArr] = useState([[]]);
    const contextValue = {
        inViewArrState: [inViewArr, setInViewArr],
    };

    return (
        <VideoContext value={contextValue}>
            {data.map((video, index) => {
                return <VideoItem inViewArr={inViewArr[2]} key={index} videoInfo={video} videoId={index} />;
            })}
        </VideoContext>
    );
}

export default SuggestVideo;
