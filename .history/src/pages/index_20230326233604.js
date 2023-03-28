export { default as Home } from './Home';
export { default as Following } from './Following';
export { default as Live } from './Live';
export { default as Profile } from './Profile';

export { default as Upload } from './Upload';
export { default as SearchDetails } from './SearchDetails';

// Đây là cách xuất một component như một named export trong ES6 module. Trong trường hợp này, nó xuất ra một component Home như một named export mặc định (default), có nghĩa là khi một module nhập Home, nó sẽ import vào component được xuất ra mặc định của module đó. Ví dụ: import { Home } from './components';
