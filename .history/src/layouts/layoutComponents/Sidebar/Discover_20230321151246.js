import { useEffect, useState } from 'react';
import dataTemp from '~/temp/data';

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setDiscoverList(dataTemp.discover);
        }, 3000);
    }, []);
    return <h1>Discover</h1>;
}

export default Discover;
