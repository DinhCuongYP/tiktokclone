import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function AccountPreview({
    children,
    className,
    avatarUrl,
    userName,
    followersCount,
    likesCount,
    fullName,
    customTippy,
    tick,
}) {
    return (
        <TippyHeadless
            placement="bottom-start"
            delay={[1000, 0]}
            interactive
            render={<h1>Alo</h1>}
            appendTo={document.body}
            {...customTippy}
        >
            {children}
        </TippyHeadless>
    );
}

AccountPreview.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    avatarUrl: PropTypes.string,
    userName: PropTypes.string,
    followersCount: PropTypes.string,
    likesCount: PropTypes.string,
    fullName: PropTypes.string,
    customTippy: PropTypes.object,
    tick: PropTypes.bool,
};

export default AccountPreview;
