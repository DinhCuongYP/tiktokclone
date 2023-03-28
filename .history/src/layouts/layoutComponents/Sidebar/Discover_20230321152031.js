import { useEffect, useState } from 'react';
import BorderTopContainer from '~/components/BorderTopContainer';
import dataTemp from '~/temp/data';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { iconMusic, iconTag } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setDiscoverList(dataTemp.discover);
        }, 3000);
    }, []);
    return (
        <BorderTopContainer className={cx('discover-wrapper')}>
            <h3 className={cx('title')}>Khám Phá</h3>
            <section className={cx('content')}>
                {discoverList.map((disItem, index) => {
                    const isHagtag = disItem.type === 'hagtag';
                    return (
                        <Button key={index} className={cx('btn-discover')} leftIcon={isHagtag ? iconTag : iconMusic}>
                            {disItem.title}
                        </Button>
                    );
                })}
            </section>
        </BorderTopContainer>
    );
}

export default Discover;
