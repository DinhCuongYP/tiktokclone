import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import image from '~/assets/image';
import { forwardRef, useState } from 'react';
const cx = classNames.bind(styles);

const Image = forwardRef({ src, alt, classNane, fallback: customFallback = image.noImage, ...props }, ref) {
    const [fallback, setfallback] = useState('');

    const handleError = () => {
        setfallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={src || fallback}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
