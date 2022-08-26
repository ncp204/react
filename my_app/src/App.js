import './App.css';
import { useState } from 'react';
import Content from './Content';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div>
    </div>
  );
}

export default App;
