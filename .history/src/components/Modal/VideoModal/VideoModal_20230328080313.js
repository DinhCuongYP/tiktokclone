import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import ModalWrapper from '../ModalWrapper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function VideoModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    return <ModalWrapper className={cx('wrapper')} isClose={isClose} onClose={handleClose}></ModalWrapper>;
}

export default VideoModal;
