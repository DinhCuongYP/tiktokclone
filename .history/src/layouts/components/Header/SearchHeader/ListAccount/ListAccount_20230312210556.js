import classNames from 'classnames/bind';
import styles from './ListAccount.module.scss';
const cx = classNames.bind(styles);

function ListAccount({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avartar-item')}>
                <img
                    className={cx('img-avarar')}
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/294296417_118109570950405_3209061799603199781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=85vutD2vlN4AX8Axhon&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBNs-8WYm8rzE0RAXtUKHfTQCmyD29Y0WuLbz5ZX1ONZA&oe=640D7433"
                    alt="avatar"
                />
            </div>

            <div className={'container'}>
                <div className={cx('nickname')}>
                    <h4 className={cx('name')}>
                        Nguyễn Đình Cường
                        <svg
                            className={cx('icon-check')}
                            width="14"
                            data-e2e=""
                            height="14"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                                fill="white"
                            ></path>
                        </svg>
                    </h4>
                </div>
                <p className={cx('name-desc')}>nguyendinhcuong</p>
            </div>
        </div>
    );
}

export default ListAccount;
