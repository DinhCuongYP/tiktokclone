import { useEffect, useRef, useState } from 'react';
import { videoSevice } from '~/sevices';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SuggestVideo from '~/components/Videos/SuggestVideo';
const cx = classNames.bind(styles);

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(2);

    const pageRandom = useRef([]);

    useEffect(() => {
        if (page < 1) return;

        const fetchApiVideo = async () => {
            const result = videoSevice.getSuggesVideo(page);

            setVideoList([result]);
        };

        fetchApiVideo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = pageRandom.current;
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

    const handleTest = () => {
        console.log(videoList);
    };

    return (
        <div className={cx('wrapper')}>
            <button onClick={handleTest}>Click</button>
            <SuggestVideo data={videoList} />
            {/* <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}></InView> */}
        </div>
    );
}

export default Home;
