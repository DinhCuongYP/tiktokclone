import { useEffect, useState } from 'react';
import { accountSevice } from '~/sevices';

function SuggestFollow() {
    const [dataSuggest, setDataSuggest] = useState([]);
    // const [playId, setPlayId] = useState(0)
    useEffect(() => {
        const getSuggestFollow = async () => {
            const dataResponse = await accountSevice.getSuggestedAccount(15);
            setDataSuggest(dataResponse);
        };

        getSuggestFollow();
    }, []);

    const renderSuggestList = () => {
        return <h1>renderSuggestList</h1>;
    };

    return <div className={cx('wrapper')}>renderSuggestList()</div>;
}

export default SuggestFollow;
