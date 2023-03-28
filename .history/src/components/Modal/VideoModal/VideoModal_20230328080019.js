import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import ModalWrapper from '../ModalWrapper';

const cx = classNames.bind(styles);

function VideoModal({ children }) {
    return <ModalWrapper className={cx('wrapper')}></ModalWrapper>;
}

export default VideoModal;
