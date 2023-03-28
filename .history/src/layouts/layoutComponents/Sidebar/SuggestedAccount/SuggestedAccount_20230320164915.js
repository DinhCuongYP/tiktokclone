import { useEffect, useState } from 'react';
import ShowAccount from '~/components/ShowAccount';
import config from '~/config';
import { accountSevice } from '~/sevices';

function SuggestedAccount() {
    const [accounts, setAccounts] = useState([]);
    const { totalLoadShowSuggested: total, defaultShowSuggest: show } = config.accounts;
    const currentItems = accounts.slice(0, show);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await accountSevice.getSuggestedAccount(total);
            setAccounts(result);
        };
        fetchApi();
    }, []);

    return (
        <div>
            <ShowAccount title="Tài khoản được để xuất" accountItems={currentItems} />
        </div>
    );
}

export default SuggestedAccount;
