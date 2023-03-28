import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import image from '~/assets/image';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Image({ src, alt, classNane, fallback: customFallback = image.noImage, ...props }, ref) {
    const [fallback, setfallback] = useState('');

    const handleError = () => {
        setfallback(customFallback);
    };

    return (
        <img
            src={src || fallback}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
