import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    return (
        <div>
            {data.map((video) => {
                return <VideoItem />;
            })}
        </div>
    );
}

export default SuggestVideo;
