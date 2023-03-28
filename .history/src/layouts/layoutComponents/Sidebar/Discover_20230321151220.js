import { useEffect, useState } from 'react';
import dataTemp from '~/temp/data';

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);
    useEffect(() => {
        setDiscoverList(dataTemp.discover);
    }, []);
    return <h1>Discover</h1>;
}

export default Discover;
