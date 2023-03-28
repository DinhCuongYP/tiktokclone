import { useEffect, useRef, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';
import { videoSevice } from '~/sevices';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (page < 1) return;

        const fetchApiVideo = async () => {
            const result = videoSevice.getSuggesVideo(page);

            result.sort(() => Math.random() - 0.5);

            return setVideoList([...videoList, ...result]);
        };

        fetchApiVideo();

        console.log('aloo');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleTest = () => {
        console.log(videoList);
    };
    return (
        <div>
            <button onClick={handleTest}>Click 2</button>
            <SuggestVideo data={videoList} />
        </div>
    );
}

export default Home;
