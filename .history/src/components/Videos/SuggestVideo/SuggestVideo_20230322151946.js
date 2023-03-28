import VideoContext from '~/contexts/VideoContext';
import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    return (
        <VideoContext>
            <VideoItem />
        </VideoContext>
    );
}

export default SuggestVideo;
