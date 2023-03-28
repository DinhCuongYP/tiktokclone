import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import ModalWrapper from '../ModalWrapper';
import { useState } from 'react';
import SvgIcon from '~/components/Icons/SvgIcon';
import { iconCloseX } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

function VideoModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);

    const handleCloseModal = () => {
        setIsClose(true);
    };

    return (
        <ModalWrapper className={cx('wrapper')} isClose={isClose} onClose={handleClose}>
            <button onClick={handleClose}>
                <SvgIcon icon={iconCloseX} />
            </button>
        </ModalWrapper>
    );
}

export default VideoModal;
