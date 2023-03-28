import { useEffect, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {}, []);
    return (
        <div>
            <SuggestVideo />
        </div>
    );
}

export default Home;
