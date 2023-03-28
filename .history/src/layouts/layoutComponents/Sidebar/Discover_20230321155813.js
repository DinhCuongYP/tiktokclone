import { useEffect, useState } from 'react';
import BorderTopContainer from '~/components/BorderTopContainer';
import dataTemp from '~/temp/data';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { iconMusic, iconTag } from '~/components/Icons/Icons';
import SvgIcon from '~/components/Icons/SvgIcon';
import LineLoading from '~/components/Loadings/LineLoading';
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
                        <Button
                            iconClassname={cx('icon-discover')}
                            textClassname={cx('text-discover')}
                            key={index}
                            className={cx('btn-discover')}
                            leftIcon={<SvgIcon icon={isHagtag ? iconTag : iconMusic} />}
                        >
                            {disItem.title}
                        </Button>
                    );
                })}
                {discoverList.length < 1 && (
                    <p>
                        <LineLoading />
                        <LineLoading />
                    </p>
                )}
            </section>
        </BorderTopContainer>
    );
}

export default Discover;
