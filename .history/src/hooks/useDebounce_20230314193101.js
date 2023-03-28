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

// Đây là một custom hook được viết bằng React Hook, được sử dụng để tạo ra một giá trị "debounced" (hoãn lại) từ giá trị ban đầu truyền vào và một thời gian trễ nhất định.

// Trong React, khi chúng ta thay đổi giá trị của một state hoặc prop, thì React sẽ tự động render lại component. Khi ta muốn giới hạn số lần render lại này, thì chúng ta có thể sử dụng debounce.

// Trong hook này, mỗi khi giá trị của value thay đổi, nó sẽ tạo ra một thời gian chờ bằng cách sử dụng hàm setTimeout(), và khi thời gian chờ này kết thúc, giá trị của value sẽ được cập nhật vào state debounce.

// Khi sử dụng hook này, chúng ta chỉ cần truyền giá trị và thời gian trễ cho nó, và hook sẽ trả về giá trị "debounced" cho chúng ta sử dụng trong component.
