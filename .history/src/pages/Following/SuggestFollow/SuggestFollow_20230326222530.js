import { useEffect, useState } from 'react';
import { accountSevice } from '~/sevices';

function SuggestFollow() {
    const [dataSuggest, setDataSuggest] = useState([]);

    useEffect(() => {
        const getSuggestFollow = async () => {
            const dataResponse = await accountSevice.getSuggestedAccount(15);
            setDataSuggest(dataResponse);
        };

        getSuggestFollow();
    }, []);
    return <h1>SuggestFollow</h1>;
}

export default SuggestFollow;
