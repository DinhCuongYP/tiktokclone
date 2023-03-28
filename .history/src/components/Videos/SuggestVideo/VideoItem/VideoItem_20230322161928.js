import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
const cx = classNames.bind(styles);

function VideoItem({ videoInfo, videoId, inViewArr }) {
    const {
        user: { first_name: firstName },
    } = videoInfo;
    const wrapperRef = useRef();

    const handleTest = () => {
        console.log(1, videoId);
        console.log(2, videoInfo);
        console.log(3, inViewArr);
    };

    useEffect(() => {
        inViewArr[videoId] = {
            wrapperIntoView: wrapperRef.current.scrollIntoView.bind(wrapperRef.current),
            inView: null,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <button onClick={handleTest}>Click</button>
            <Link></Link>
        </div>
    );
}

export default VideoItem;
