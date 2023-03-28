import { useEffect, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';
import { videoSevice } from '~/sevices';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (page < 1) {
            return;
        }

        const fetchApi = async () => {
            const result = await videoSevice.getSuggesVideo(page);
            result.soft(() => Math.random() - 0.5);

            setVideoList([...videoList, ...result]);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
        <div>
            <SuggestVideo data={videoList} />
        </div>
    );
}

export default Home;
