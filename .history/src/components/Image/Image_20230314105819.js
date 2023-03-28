function Image() {
    return (  );
}

export default Image;

// Trong React, "forwardRef" là một API được sử dụng để chuyển tiếp (forward) các refs từ một component cha xuống một component con bên trong nó.

// Khi bạn tạo một component con và muốn truy cập trực tiếp đến các phần tử DOM của nó thông qua refs, bạn có thể sử dụng forwardRef để chuyển tiếp refs từ component cha xuống cho component con

// Khi bạn sử dụng forwardRef, bạn sẽ cần truyền một function component vào làm đối số đầu tiên của forwardRef. Function component này sẽ nhận vào hai đối số: props và ref. Bên trong function component này, bạn có thể trả về một React element, tương tự như cách bạn tạo một component thông thường.