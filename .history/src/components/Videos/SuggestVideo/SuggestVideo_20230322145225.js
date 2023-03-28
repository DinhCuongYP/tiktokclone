import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    return (
        <div>
            {data.map((video) => {
                return <VideoItem videoInfo={video} />;
            })}
        </div>
    );
}

export default SuggestVideo;
