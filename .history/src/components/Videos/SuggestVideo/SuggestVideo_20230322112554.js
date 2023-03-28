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

    useEffect(() => {
        const handleScrollTo = (type) => {
            const fistVideoId = inViewArr[0].findIndex((inViewObj) => inViewObj.inView === true);
            const currentVideoId = priorityVideo !== 1 ? priorityVideo : fistVideoId;

            if (currentVideoId === 1) {
                return;
            }

            const prevVideo = inViewArr[0][currentVideoId - 1];
            const nextVideo = inViewArr[0][currentVideoId + 1];

            const optionsValue = {
                block: 'start',
                behavior: 'smooth',
            };

            if (type === 'down') {
                nextVideo && nextVideo.wrapperIntoView(optionsValue);
            } else if (type === 'up') {
                prevVideo && prevVideo.wrapperIntoView(optionsValue);
            }
        };

        const handleKeyDown = (e) => {
            const keyCode = e.keyCode;

            switch (keyCode) {
                case 77:
                    setMuted(!muted);
                    break;

                case 32:
                case 40:
                    e.preventDefault();
                    handleScrollTo('down');
                    break;

                case 38:
                    e.preventDefault();
                    handleScrollTo('up');
                    break;

                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [muted, inViewArr, priorityVideo]);

    return (
        <VideoContext value={contextValue}>
            {data.map((video, index) => {
                return <VideoItem videoInfo={video} videoId={index} key={index} inViewArr={inViewArr[0]} />;
            })}
        </VideoContext>
    );
}

SuggestVideo.propTypes = {
    data: PropTypes.array,
};

export default SuggestVideo;
