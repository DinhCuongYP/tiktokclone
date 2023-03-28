import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // component
                        const Page = route.component;
                        // Layout
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;

// Fragment là một component của React giúp tạo ra một phần tử giao diện không có tag HTML. Nó cho phép nhóm các phần tử giao diện lại với nhau mà không thêm các phần tử HTML thừa vào DOM. Việc sử dụng Fragment giúp tối ưu hiệu suất, tạo ra mã nguồn gọn hơn và dễ đọc hơn. Thay vì sử dụng <div> hay <span> để bao quanh các phần tử con, ta có thể sử dụng <Fragment> để bao quanh chúng. Ngoài ra, ta có thể sử dụng cú pháp rút gọn là <>...</> thay vì <Fragment>...</Fragment>.

// Đây là một đoạn mã của một ứng dụng React sử dụng React Router để điều hướng giữa các trang web.

// Đoạn mã import các thành phần cần thiết từ thư viện react-router-dom, bao gồm Router, Routes và Route để xác định các tuyến đường và cách hiển thị các trang web.
// DefaultLayout và publicRoutes được nhập từ các module khác, trong đó publicRoutes là một mảng các đối tượng định nghĩa các tuyến đường trên ứng dụng.
// Hàm App được định nghĩa để render nội dung của ứng dụng. Hàm này sử dụng Router của React Router để bao bọc toàn bộ ứng dụng.
// Nội dung của ứng dụng được định nghĩa bằng cách sử dụng Routes và một mảng các Route, mỗi Route sẽ ứng với một tuyến đường trong publicRoutes.
// Mỗi Route được thiết lập để hiển thị một Page (một component) bên trong một Layout (một component bao bọc cho Page) được định nghĩa bởi thuộc tính "layout" của mỗi đối tượng trong publicRoutes. Nếu không có thuộc tính này, Layout sẽ là DefaultLayout. Nếu thuộc tính "layout" được đặt là null, thì Layout sẽ là Fragment, có nghĩa là không có bất kỳ layout nào được sử dụng.
// Các trang web sẽ được hiển thị thông qua việc render Page bên trong Layout bằng cách sử dụng các props của Route.
