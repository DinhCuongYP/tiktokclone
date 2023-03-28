import PropTypes from 'prop-types';
import { useState } from 'react';
import { loginModalData, registerModalData } from '~/temp/data/modal';
import ModalWrapper from '../ModalWrapper';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconArrowLeft, iconArrowToBot2, iconCloseX } from '~/components/Icons/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tabLists, setTabLists] = useState([loginModalData]);
    const [registering, setSegistering] = useState(false);
    const [fullRegisterList, setFullRegisterList] = useState(false);

    let currentTab = tabLists[tabLists.length - 1];

    //

    if (registering && !fullRegisterList) {
        const Arr = Array.isArray(currentTab.data);
        if (Arr) {
            // eslint-disable-next-line no-const-assign
            currentTab = { ...currentTab };
            currentTab.data = currentTab.data.slice(0, 3);
        }
    }

    // Fuciton

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
        setTabLists(newTablist);
    };

    const handleGoToRegister = () => {
        setTabLists([registerModalData]);
        setSegistering(true);
    };

    const handleGoToLogin = () => {
        setTabLists([loginModalData]);
        setSegistering(false);
        setFullRegisterList(false);
    };

    const handleFullRegisterList = () => {
        setFullRegisterList(true);
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

                {registering && !fullRegisterList && tabLists.length === 1 && (
                    <div className={cx('btnShow-fullRegisterList')} onClick={handleFullRegisterList}>
                        <SvgIcon icon={iconArrowToBot2} />
                    </div>
                )}
            </section>

            <footer className={cx('footer')}>
                {registering ? 'Bạn đã có tài khoản?' : 'Bạn không có tài khoản?'}
                <span className={cx('btn-toggleLogin')} onClick={registering ? handleGoToLogin : handleGoToRegister}>
                    {registering ? 'Đăng nhập' : 'Đăng ký'}
                </span>
            </footer>
        </ModalWrapper>
    );
}

LoginModal.propTypes = {
    handleClose: PropTypes.func,
};

export default LoginModal;
