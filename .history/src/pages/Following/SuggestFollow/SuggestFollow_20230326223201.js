import { useEffect, useState } from 'react';
import { accountSevice } from '~/sevices';
import classNames from 'classnames/bind';
import styles from './SuggestFollow.module.scss';
const cx = classNames.bind(styles);

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

    return <div className={cx('wrapper')}>{renderSuggestList()}</div>;
}

export default SuggestFollow;
