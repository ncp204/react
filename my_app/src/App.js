import './App.css';
import {useState, useCallback} from 'react';
import React from "react";
import Content from "./Content";

// Chủ yếu dùng để kết hợp với memo khi có sự thay đổi từ compenent con sang cha mà component con ko bị ảnh hưởng

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback(): tránh tạo ra hàm mới ko cần thiết trong function component
//      - Reference types
//      - React memo()


function App() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [])

    return (
        <div style={{padding: 20}}>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    );
}

export default App;