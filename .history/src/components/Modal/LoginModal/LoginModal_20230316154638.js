import { WrapperPopper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import { useState } from 'react';
import { loginModalData } from '~/temp/data/modal';
import Button from '~/components/Button';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconCloseX } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);

function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tablist, setTablist] = useState([loginModalData]);
    const currentTab = tablist[tablist.length - 1];

    const handleCloseModal = () => {
        setIsClose(true);
    };
    return (
        <WrapperPopper className={cx('wrapper')} isClose={isClose} onClose={handleCloseModal}>
            <Button>
                <SvgIcon icon={iconCloseX} />
            </Button>

            <section className={cx('body')}>
                {currentTab.map((loginItem, index) => (
                    <Button>{loginItem.title}</Button>
                ))}
            </section>
        </WrapperPopper>
    );
}

export default LoginModal;
