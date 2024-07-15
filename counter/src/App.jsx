import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data , setData] = useState(1);

  const changeData = (e) => {
    setData(e.target.value)
  }

  const add = () => {
    setCount(Number(count)+Number(data))
  }

  const sub = () => {
    setCount(count-data)
  }


  const reset = () => {
    setCount(0);
    setData(1);
  }

  return (
    <>
    <h1>Counter</h1>
    <p>value : {count}</p>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <br></br>
    <input value={data} onChange={changeData}/>
    <br></br>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
