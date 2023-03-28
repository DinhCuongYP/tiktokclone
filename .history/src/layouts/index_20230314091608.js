export { default as DefaultLayout } from './DefaultLayout';

export { default as FollowingLayout } from './FollowingLayout';
export { default as FullSpace } from './FullSpace';

// Việc sử dụng { default as DefaultLayout } trong cú pháp export cho phép ta đặt lại tên của component khi nó được xuất ra bên ngoài. Trong trường hợp này, component được đặt lại tên là DefaultLayout thay vì tên mặc định của nó được định nghĩa trong file ./DefaultLayout.js hoặc ./DefaultLayout.jsx.
