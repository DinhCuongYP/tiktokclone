import { useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';

function Home() {
    const [videoList, setVideoList] = useState([]);
    return (
        <div>
            <SuggestVideo />
        </div>
    );
}

export default Home;
