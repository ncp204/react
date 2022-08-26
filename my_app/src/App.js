import './App.css';
import { useState } from 'react';

function App() {
  const [infor, setInfor] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ho Chi Minh'
  })

  const handleUpdate = () => {
    setInfor(prev => {
      return {
        ...prev,
        bio: 'aaaaaaaa'
      }
    })
  }

  return (
    <div className="App">
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  );
}

export default App;
