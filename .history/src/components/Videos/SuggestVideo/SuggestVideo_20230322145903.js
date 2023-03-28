import VideoItem from './VideoItem';

function SuggestVideo({ data }) {
    const handleTest = () => {
        console.log(data);
    };

    return (
        <div>
            <button onClick={handleTest}>Test2</button>
        </div>
    );
}

export default SuggestVideo;
