import { useEffect, useRef, useState } from 'react';
import SuggestVideo from '~/components/Videos/SuggestVideo/SuggestVideo';
import { videoSevice } from '~/sevices';
import { InView } from 'react-intersection-observer';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconApple } from '~/components/Icons/Icons';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);

    const randomRef = useRef([]);

    useEffect(() => {
        if (page < 1) return;

        const fetchApiVideo = async () => {
            const result = videoSevice.getSuggesVideo(page);

            result.sort(() => Math.random() - 0.5);

            setVideoList([...videoList, ...result]);
        };

        fetchApiVideo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = randomRef.current;
        let page;

        if (randomList.length >= countPage) {
            randomList.length === countPage && randomList.push(max);
            page = ++randomList[randomList.length - 1];
            return page;
        }

        do {
            page = Math.floor(Math.random() * countPage + min);
        } while (randomList.includes(page));

        randomList.push(page);
        return page;
    };

    return (
        <div className={cx('wrapper')}>
            <SuggestVideo data={videoList} />
            <InView onChange={(inview) => inview && setPage(handleRandomPage(1, 10))}>
                <SvgIcon icon={iconApple} />
            </InView>
        </div>
    );
}

export default Home;