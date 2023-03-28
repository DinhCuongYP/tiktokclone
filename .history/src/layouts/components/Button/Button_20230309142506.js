import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({ primary, children, upload, loginSidebar, nocolor, follow, download, pullup }) {
    const classes = cx('btn', {
        primary,
        children,
        upload,
        loginSidebar,
        nocolor,
        follow,
        download,
        pullup,
    });
    return <button className={classes}>{children}</button>;
}

export default Button;
