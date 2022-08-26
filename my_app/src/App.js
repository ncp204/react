import './App.css';
import { useState } from 'react';

// response from API
const courses = [
  { id: 1, name: 'HTML, CSS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' }
]

function App() {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  // const [checked, setChecked] = useState();
  const [checked, setChecked] = useState([]);

  const handleRegister = () => {
    // Call API
    // console.log({ name, email });
    console.log(checked);
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    })
  }

  console.log(checked);

  return (
    <div className="App">
      <div style={{ padding: 32 }}>
        {courses.map(course => (
          <div key={course.id}>
            {/* <input type='radio'
              onChange={() => setChecked(course.id)}
              checked={checked === course.id} /> */}
            <input type='checkbox'
              onChange={() => handleCheck(course.id)}
              checked={checked.includes(course.id)} />
            {course.name}
          </div>
        ))}
        <button onClick={handleRegister}>Change</button>
      </div>
    </div>
  );
}

export default App;
