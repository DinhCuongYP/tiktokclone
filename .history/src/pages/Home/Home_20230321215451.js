import { useEffect, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';
import { videoSevice } from '~/sevices';

function Home() {
    return (
        <div>
            <SuggestVideo />
        </div>
    );
}

export default Home;
