import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function HeaderOnly() {
    return (
        <div className={cx('wrapper')}>
            <div>Header</div>
            <div className={cx('content')}>Content</div>
        </div>
    );
}

export default HeaderOnly;
