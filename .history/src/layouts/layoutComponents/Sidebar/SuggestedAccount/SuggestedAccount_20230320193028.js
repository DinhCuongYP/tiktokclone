import { useEffect, useState } from 'react';
import ShowAccount from '~/components/ShowAccount';
import config from '~/config';
import * as accountSevice from '~/sevices/accountSevice';

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

    return <ShowAccount title="Tài khoản được để xuất" accountItems={currentItems} />;
}

export default SuggestedAccount;
