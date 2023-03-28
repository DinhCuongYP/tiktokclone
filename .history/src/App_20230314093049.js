import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // Component
                        const Page = route.component;
                        // Layout
                        const Layout = DefaultLayout;

                        if (route.layout) {
                            // eslint-disable-next-line no-const-assign
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            // eslint-disable-next-line no-const-assign
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
        </Router>
    );
}

export default App;

// Fragment là một component của React giúp tạo ra một phần tử giao diện không có tag HTML. Nó cho phép nhóm các phần tử giao diện lại với nhau mà không thêm các phần tử HTML thừa vào DOM. Việc sử dụng Fragment giúp tối ưu hiệu suất, tạo ra mã nguồn gọn hơn và dễ đọc hơn. Thay vì sử dụng <div> hay <span> để bao quanh các phần tử con, ta có thể sử dụng <Fragment> để bao quanh chúng. Ngoài ra, ta có thể sử dụng cú pháp rút gọn là <>...</> thay vì <Fragment>...</Fragment>.
