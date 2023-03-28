import { useState } from 'react';
import config from '~/config';
import VideoContext from '~/contexts/VideoContext';
import useLocalStorage from '~/hooks/useLocalStorage';
import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    const videoStorageKey = config.localStorage.videoControl;
    const [dataStorage, setDataStorage] = useLocalStorage(videoStorageKey);

    const [inViewArr, setInViewArr] = useState([[]]);
    const [volume, setVolume] = useState(dataStorage.volume || 0.6);
    const [muted, setMuted] = useState(true);
    const [priorityVideo, setPriorityVideo] = useState(-1);

    const contextValue = {
        inViewArrState: [inViewArr, setInViewArr],
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        priorityVideoState: [priorityVideo, setPriorityVideo],
    };

    return (
        <VideoContext value={contextValue}>
            {data.map((video, index) => (
                <VideoItem key={index} videoInfo={video} videoId={index} inViewArr={inViewArr[0]} />
            ))}
        </VideoContext>
    );
}

export default SuggestVideo;
