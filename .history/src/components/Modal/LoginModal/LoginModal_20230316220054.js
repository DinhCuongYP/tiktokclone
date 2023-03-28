import { useState } from 'react';
import { loginModalData } from '~/temp/data/modal';
import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconCloseX } from '~/components/Icons/Icons';
import Button from '~/components/Button';
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

            <section className={cx('body')}>
                <h1 className={cx('title-body')}>{currentTab.title}</h1>
                {currentTab.data.map((loginItem, index) => (
                    <Button
                        upload
                        className={cx('loginItem-btn')}
                        key={index}
                        iconClassname={cx('icon')}
                        textClassname={cx('text')}
                        leftIcon={loginItem.icon}
                    >
                        {loginItem.title}
                    </Button>
                ))}
            </section>

            <footer className={cx('footer')}>
                <span>Bạn Không Có Tài Khoản? Đăng ký</span>
            </footer>
        </ModalWrapper>
    );
}

export default LoginModal;
