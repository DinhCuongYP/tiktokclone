import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper';
import styles from './DownloadMobileModal.module.scss';
const cx = classNames.bind(styles);

function DownloadMobileModal({ handleClose }) {
    return (
        <ModalWrapper className={cx('modal-wrapper')}>
            <h1>Aloo</h1>
        </ModalWrapper>
    );
}

export default DownloadMobileModal;
