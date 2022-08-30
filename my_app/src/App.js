import './App.css';
import {useState, useCallback, useMemo, useRef} from 'react';
import React from "react";
import Content from "./Content";

// useMemo: sử dụng để tránh thực hiện lại một logic không cần thiết

function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])

        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        const result = products.reduce((result, product) => result+product.price, 0);
        return result;
    }, [products])

    return (
        <div style={{padding: 20}}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter your name"
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder="Enter price"
                onChange={e => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br/>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;