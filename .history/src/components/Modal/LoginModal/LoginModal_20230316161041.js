import PropTypes from 'prop-types';
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
        <WrapperPopper className={cx('wrapper')} isClose={isClose} onClose={handleClose}>
            <Button>
                <SvgIcon icon={iconCloseX} />
            </Button>

            <section className={cx('body')}>
                <h4 className={cx('title-body')}>{currentTab.title}</h4>
                {currentTab.map((loginItem, index) => (
                    <Button key={index}>{loginItem.title}</Button>
                ))}
            </section>

            <footer className={cx('footer')}>
                <span>Bạn Không Có Tài Khoản</span>
            </footer>
        </WrapperPopper>
    );
}

LoginModal.propTypes = {
    handleClose: PropTypes.func,
};

export default LoginModal;
