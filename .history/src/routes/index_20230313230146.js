export * from './routes';

// Đây là một lệnh export trong JavaScript để xuất tất cả các thành phần đã được export từ module hiện tại, kèm theo tất cả các thành phần đã được export từ module khác được import vào.

// Trong trường hợp này, nó xuất tất cả các thành phần đã được export từ file ./routes. Ví dụ, nếu file ./routes có các export sau đây:
// export const homeRoute = '/';
// export const profileRoute = '/profile';

// Thì khi sử dụng export * from './routes', sẽ tương đương với:

// export const profileRoute = '/profile';
// export const homeRoute = '/';
