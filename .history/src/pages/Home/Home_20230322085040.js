import { useEffect, useRef, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';
import { videoSevice } from '~/sevices';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchApiVideo = async () => {
            const result = videoSevice.getSuggesVideo(page);

            result.sort(() => Math.random() - 0.5);

            setVideoList([...videoList, ...result]);
        };

        fetchApiVideo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div>
            <SuggestVideo data={videoList} />
        </div>
    );
}

export default Home;
