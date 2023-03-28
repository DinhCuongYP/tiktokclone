import VideoContext from '~/contexts/VideoContext';
import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    return (
        <VideoContext>
            {data.map((video, index) => {
                return <VideoItem key={index} videoInfo={video} videoId={index} />;
            })}
        </VideoContext>
    );
}

export default SuggestVideo;
