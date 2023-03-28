import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './KeyBoardModal.module.scss';
import ModalWrapper from '../ModalWrapper';
import { useState } from 'react';
import SvgIcon from '~/components/Icons/SvgIcon';
import {
    iconCloseX,
    iconKeyboardArrowBottom,
    iconKeyboardArrowTop,
    iconKeyboardL,
    iconKeyboardM,
} from '~/components/Icons/Icons';
const cx = classNames.bind(styles);

function KeyBoardModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    return (
        <ModalWrapper className={cx('wrapper-modal')} isClose={isClose} onClose={handleClose}>
            <button className={cx('close-btn')}>
                <SvgIcon icon={iconCloseX} />
            </button>
            <h2 className={cx('title')}>Phím tắt trên bàn phím</h2>
            <div className={cx('list-keyboard')}>
                <p className={cx('keyboard-item')}>
                    Quay về video trước <SvgIcon icon={iconKeyboardArrowTop} />
                </p>

                <p className={cx('keyboard-item')}>
                    Đi đến video tiếp theo <SvgIcon icon={iconKeyboardArrowBottom} />
                </p>

                <p className={cx('keyboard-item')}>
                    Thích video <SvgIcon icon={iconKeyboardL} />
                </p>

                <p className={cx('keyboard-item')}>
                    Tắt tiếng / bật tiếng video <SvgIcon icon={iconKeyboardM} />
                </p>
            </div>
        </ModalWrapper>
    );
}

KeyBoardModal.propTypes = {
    handleClose: PropTypes.func,
};

export default KeyBoardModal;
