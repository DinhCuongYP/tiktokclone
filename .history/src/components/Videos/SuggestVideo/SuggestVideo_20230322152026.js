import VideoContext from '~/contexts/VideoContext';
import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    return (
        <VideoContext>
            {data.map((video, index) => {
                return <VideoItem />;
            })}
        </VideoContext>
    );
}

export default SuggestVideo;