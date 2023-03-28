import { useEffect, useState } from 'react';
import ShowAccount from '~/components/ShowAccount';
import config from '~/config';
import { accountSevice } from '~/sevices';
function SuggestedAccount() {
    const [accounts, setAccounts] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    //

    const { totalLoadSuggested: total, defaultShowSuggested: show } = config.accounts;

    //

    const currentItems = seeAll ? accounts : accounts.slice(0, show);
    const btnTitle = seeAll ? 'Ẩn bớt' : 'Xem tất cả';

    //

    const options = {
        btnTitle,
        hoverActivate: true,
    };

    // funciton

    useEffect(() => {
        const fetchApi = async () => {
            const result = await accountSevice.getSuggestedAccount(30);

            setAccounts(result);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleBtnSeeAll = () => {
        setSeeAll(!seeAll);
    };

    return (
        <ShowAccount
            title="Tài khoản được để xuất"
            accountItems={currentItems}
            onClick={handleToggleBtnSeeAll}
            {...options}
        />
    );
}

export default SuggestedAccount;
