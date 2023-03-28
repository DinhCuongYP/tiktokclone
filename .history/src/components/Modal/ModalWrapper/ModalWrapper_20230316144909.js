import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';
const cx = classNames.bind(styles);

function ModalWrapper({ children, className, isClose, onClose, animate = 'hide-effect-default' }) {
    return <div></div>;
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalWrapper;
