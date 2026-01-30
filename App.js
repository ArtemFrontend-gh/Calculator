import './App.css';
import { useState } from 'react';

function App() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState(0)

    const clearAll = () => {
      setA("")
      setB("")
      setResult("")
    }

    const security = (callback) => {
      if(!a || !b) {
        setResult("Please, enter the correct numbers!")
      } else {
        callback()
      }
    }

  return (
    <div className='App'>
    <div className='App-content'>
      <h1>Calculator</h1>

    <div className='Input-app'>
      <input
      type='number'
      value={a}
      onChange={(e) => setA(e.target.value)}
      />
      <input
      type='number'
      value={b}
      onChange={(e) => setB(e.target.value)}
      />
      </div>

    <div className='buttons-App'>
      <button onClick={() => security(() => setResult(Number(a) + Number(b)))}>+</button>
      <button onClick={() => security(() => setResult(Number(a) - Number(b)))}>-</button>
      <button onClick={() => security(() => setResult(Number(a) * Number(b)))}>*</button>
      <button onClick={() => security(() => setResult(Number(a) / Number(b)))}>/</button>
      <button onClick={clearAll}>Clear</button>
      </div>

      <h2 className='h2-result'>Result: {result}</h2>
    </div>
    <a className='a-App' href='https://github.com/ArtemFrontend-gh'>My GitHub</a>
    </div>
  );
}

export default App;
