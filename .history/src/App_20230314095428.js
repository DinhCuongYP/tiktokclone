import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return <h1>Alo</h1>;
}

export default App;

// Fragment là một component của React giúp tạo ra một phần tử giao diện không có tag HTML. Nó cho phép nhóm các phần tử giao diện lại với nhau mà không thêm các phần tử HTML thừa vào DOM. Việc sử dụng Fragment giúp tối ưu hiệu suất, tạo ra mã nguồn gọn hơn và dễ đọc hơn. Thay vì sử dụng <div> hay <span> để bao quanh các phần tử con, ta có thể sử dụng <Fragment> để bao quanh chúng. Ngoài ra, ta có thể sử dụng cú pháp rút gọn là <>...</> thay vì <Fragment>...</Fragment>.
