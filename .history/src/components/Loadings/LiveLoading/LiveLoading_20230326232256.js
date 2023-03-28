import classNames from 'classnames/bind';
import styles from './LiveLoading.module.scss';

const cx = classNames.bind(styles);

function LiveLoading() {
    return (
        <div className={cx('live-loading')}>
            <p className={cx('loading__view')}></p>
            <div className={cx('loading__info')}>
                <p className={cx('live-icon')}>LIVE</p>
                <p className={cx('username')}></p>
                <p className={cx('description')}></p>
            </div>
            <div className={cx('heart-icon')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 100 300"
                    width="100"
                    height="300"
                    preserveAspectRatio="xMidYMid slice"
                    style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                >
                    <defs>
                        <clipPath id="__lottie_element_29">
                            <rect width="100" height="300" x="0" y="0"></rect>
                        </clipPath>
                        <clipPath id="__lottie_element_31">
                            <path d="M0,0 L360,0 L360,640 L0,640z"></path>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_29)">
                        <g
                            clip-path="url(#__lottie_element_31)"
                            transform="matrix(1,0,0,1,-284,-222)"
                            opacity="1"
                            style="display: block;"
                        >
                            <g
                                transform="matrix(1,0,0,1,335.11553955078125,287.169921875)"
                                opacity="0.006836581196581193"
                                style="display: none;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,333.5,280)"
                                opacity="0.006442096774238024"
                                style="display: none;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,337.4971923828125,314.5973815917969)"
                                opacity="0.00764557692312863"
                                style="display: none;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,336.0166931152344,303.6549987792969)"
                                opacity="0.010058669354837804"
                                style="display: none;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,335.92431640625,302.7120666503906)"
                                opacity="0.006430645161297548"
                                style="display: none;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,334.03839111328125,281.1789245605469)"
                                opacity="0.03868596774198096"
                                style="display: block;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                            <g
                                transform="matrix(1,0,0,1,336.0674743652344,358.8186340332031)"
                                opacity="0.2161053225806907"
                                style="display: block;"
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path
                                        fill="rgb(99,99,99)"
                                        fill-opacity="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                    <path
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,190,190)"
                                        stroke-opacity="1"
                                        stroke-width="1"
                                        d=" M-1.812000036239624,9.819000244140625 C-1.812000036239624,9.819000244140625 0,11.468999862670898 0,11.468999862670898 C0,11.468999862670898 1.812000036239624,9.831000328063965 1.812000036239624,9.831000328063965 C8.25,3.9809999465942383 12.5,0.13099999725818634 12.5,-4.593999862670898 C12.5,-8.444000244140625 9.475000381469727,-11.468999862670898 5.625,-11.468999862670898 C3.450000047683716,-11.468999862670898 1.3630000352859497,-10.456000328063965 0,-8.855999946594238 C-1.3630000352859497,-10.456000328063965 -3.450000047683716,-11.468999862670898 -5.625,-11.468999862670898 C-9.475000381469727,-11.468999862670898 -12.5,-8.444000244140625 -12.5,-4.593999862670898 C-12.5,0.13099999725818634 -8.25,3.9820001125335693 -1.812000036239624,9.819000244140625z"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default LiveLoading;
