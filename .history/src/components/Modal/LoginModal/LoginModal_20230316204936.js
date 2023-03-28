import { useState } from 'react';
import { loginModalData } from '~/temp/data/modal';
import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconCloseX } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);

function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tabLists, setTabLists] = useState([loginModalData]);

    const currentTab = tabLists[tabLists.length - 1];

    const handleCloseModal = () => {
        setIsClose(true);
    };
    return (
        <ModalWrapper className={cx('modal-wrapper')} isClose={isClose} onClose={handleClose}>
            <button onClick={handleCloseModal} className={cx('close-btn')}>
                <SvgIcon icon={iconCloseX} />
            </button>

            <section className={cx('body')}></section>
        </ModalWrapper>
    );
}

export default LoginModal;
