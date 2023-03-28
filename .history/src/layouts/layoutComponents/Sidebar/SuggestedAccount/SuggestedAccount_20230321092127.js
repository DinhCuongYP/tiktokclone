import { useEffect, useState } from 'react';
import ShowAccount from '~/components/ShowAccount';
import config from '~/config';
import * as accountSevice from '~/sevices/accountSevice';

function SuggestedAccount() {
    const [accounts, setAccounts] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    //

    const { totalLoadSuggested: total, defaultShowSuggest: show } = config.accounts;

    //

    const currentItems = seeAll ? accounts : accounts.slice(0, show);
    const btnTitle = seeAll ? 'Ẩn bớt' : 'Xem tất cả';
    //

    const options = {
        btnTitle,
    };

    // funciton

    const handleToggleBtnSeeAll = () => {
        console.log(currentItems);
        console.log(4, total);
        console.log(3, show);
        console.log(2, accounts);
        console.log(1, seeAll);
        setSeeAll(!seeAll);
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await accountSevice.getSuggestedAccount(total);
            setAccounts(result);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ShowAccount
            title="Tài khoản được để xuất"
            accountItems={currentItems}
            {...options}
            onClick={handleToggleBtnSeeAll}
        />
    );
}

export default SuggestedAccount;
