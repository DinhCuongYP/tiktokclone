import styles from './TitleContent.module.scss';
import classNames from 'classnames/bind';
import Button from '~/layouts/components/Button';
const cx = classNames.bind(styles);

function TitleContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('name')}>Đình Cường</h3>
                <h4 className={cx('nickname')}>DinhCuong 😍😍</h4>
            </div>
            <Button follow>Follow</Button>
            <div className={cx('hagtag')}>
                <strong className={cx('hagtag1')}>#xuhuongtiktok2023</strong>
                <strong className={cx('hagtag1')}>#foryou</strong>
                <strong className={cx('hagtag1')}>#viral</strong>
                <strong className={cx('hagtag1')}>#historia</strong>
            </div>
            <h4 className={cx('music')}>
                <svg
                    fill="rgba(22, 24, 35, 1)"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="tiktok-812w79-SvgIcon epjbyn2"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                    ></path>
                </svg>
                <span>Relaxing Japanese-style piano song inviting nostalgia - Akiko Akiyama</span>
            </h4>
        </div>
    );
}

export default TitleContent;
