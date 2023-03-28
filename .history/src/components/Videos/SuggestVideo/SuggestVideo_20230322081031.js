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

    return (
        <VideoContext>
            {data.map((video, index) => (
                <VideoItem key={index} videoInfo={video} videoId={index} inViewArr={inViewArr[0]} />
            ))}
        </VideoContext>
    );
}

export default SuggestVideo;
