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
    const [colume, setColume] = useState(dataStorage.colume || 0.6);
    const [muted, setMuted] = useState(true);
    const [priorityVideo, setPriorityVideo] = useState(-1);

    const contextValue = {
        inViewArrState: [inViewArr, setInViewArr],
        columeState: [colume, setColume],
        mutedState: [muted, setMuted],
        priorityVideoState: [priorityVideo, setPriorityVideo],
    };

    useEffect(() => {
        const data = {
            colume: colume,
        };

        setDataStorage(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colume]);

    useEffect(() => {
        const handleSrollTo = (type) => {
            const firstInViewId = inViewArr[0].findIndex((inViewObj) => inViewObj.inView === true);
        };
    }, [priorityVideo, muted, inViewArr]);

    return (
        <VideoContext value={contextValue}>
            {data.map((video, index) => {
                return <VideoItem inViewArr={inViewArr[0]} key={index} videoInfo={video} videoId={index} />;
            })}
        </VideoContext>
    );
}

SuggestVideo.propTypes = {
    data: PropTypes.array,
};

export default SuggestVideo;
