import PropTypes from 'prop-types';
import { useState } from 'react';
import { loginModalData } from '~/temp/data/modal';
import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowLeft, iconCloseX } from '~/components/Icons/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tabLists, setTabLists] = useState([loginModalData]);

    const currentTab = tabLists[tabLists.length - 1];

    const handleCloseModal = () => {
        setIsClose(true);
        handleClose();
    };

    const handleGoChildrenTab = (loginItem) => {
        const hasChildren = !!loginItem.children;

        if (hasChildren) {
            setTabLists([...tabLists, loginItem.children]);
        }
    };

    const handleBackChildrenTab = () => {
        const newTablist = [...tabLists];
        newTablist.pop();
        setTabLists([newTablist]);
    };

    return (
        <ModalWrapper className={cx('modal-wrapper')} isClose={isClose} onClose={handleClose}>
            <button onClick={handleCloseModal} className={cx('close-btn')}>
                <SvgIcon icon={iconCloseX} />
            </button>

            {tabLists.length > 1 && (
                <button onClick={handleBackChildrenTab} className={cx('icon-arrowleft')}>
                    <SvgIcon icon={iconArrowLeft} />
                </button>
            )}

            <section className={cx('body')}>
                <h1 className={cx('title-body')}>{currentTab.title}</h1>
                {currentTab.type === 'component' ? (
                    <currentTab.data />
                ) : (
                    currentTab.data.map((loginItem, index) => (
                        <Button
                            upload
                            className={cx('loginItem-btn')}
                            key={index}
                            iconClassname={cx('icon')}
                            textClassname={cx('text')}
                            leftIcon={loginItem.icon}
                            disable={loginItem.disable}
                            onClick={() => handleGoChildrenTab(loginItem)}
                        >
                            {loginItem.title}
                        </Button>
                    ))
                )}
            </section>

            <footer className={cx('footer')}>Bạn Không Có Tài Khoản? Đăng ký</footer>
        </ModalWrapper>
    );
}

LoginModal.propTypes = {
    handleClose: PropTypes.func,
};

export default LoginModal;
