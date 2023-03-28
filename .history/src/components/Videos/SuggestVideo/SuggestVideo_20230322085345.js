import { useEffect, useState } from 'react';
import config from '~/config';
import VideoContext from '~/contexts/VideoContext';
import useLocalStorage from '~/hooks/useLocalStorage';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types';

function SuggestVideo({ data }) {
    const videoStorageKey = config.localStorage.videoControl;
    const [dataStorage, setDataStorage] = useLocalStorage(videoStorageKey);

    const [inViewArr, setInViewArr] = useState([[]]);
    const [volume, setVolume] = useState(dataStorage.volume || 0.6);
    const [muted, setMuted] = useState(true);
    const [priorityVideo, setPriorityVideo] = useState(-1);

    useEffect(() => {
        const data = {
            volume: volume,
        };

        setDataStorage(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volume]);

    const contextValue = {
        inViewArrState: [inViewArr, setInViewArr],
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        priorityVideoState: [priorityVideo, setPriorityVideo],
    };

    const handleTest = () => {
        console.log(data.id);
    };

    return (
        <VideoContext value={contextValue}>
            <button onClick={handleTest}>Test</button>
            {data.map((video, index) => {
                return <VideoItem key={index} videoInfo={video} videoId={index} inViewArr={inViewArr[0]} />;
            })}
        </VideoContext>
    );
}

SuggestVideo.propTypes = {
    data: PropTypes.array,
};

export default SuggestVideo;
