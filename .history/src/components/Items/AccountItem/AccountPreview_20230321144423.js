import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { WrapperPopper } from '~/components/Popper';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '~/components/Button';
import ShowTick from '~/components/ShowTick';
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
    const renderPreview = (attrs) => (
        <div {...attrs} tabIndex="-1" className={cx({ [className]: className })}>
            <WrapperPopper className={cx('wrapper-preview')}>
                <div className={cx('preview-header')}>
                    <Link to={`/@${userName}`}>
                        <Image className={cx('avatar-preview')} src={avatarUrl} alt={fullName} />
                    </Link>
                    <Button className={cx('btn-follow')} login>
                        Follow
                    </Button>
                </div>

                <Link to={`/@${userName}`} className={cx('preview-body')}>
                    <span className={cx('username-preview')}>{userName}</span>
                    <ShowTick tick={tick} />
                    <br />
                    <span className={cx('name-preview')}>{fullName}</span>
                </Link>

                <footer className={cx('preview-footer')}>
                    <b className={cx('user-status')}>{followersCount}</b>
                    <span className={cx('user_status-title')}></span>
                </footer>
            </WrapperPopper>
        </div>
    );
    return (
        <TippyHeadless
            // visible
            placement="bottom-start"
            delay={[1000, 0]}
            interactive
            render={renderPreview}
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
