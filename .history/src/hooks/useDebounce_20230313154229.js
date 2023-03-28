import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const setTime = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(setTime);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounce;
}

export default useDebounce;
