import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mainValue, setMainValue] = useState(1);
  // Here we can create a variable and use it as showing value, not everytime state we need to manage it
  const multipliedValue = mainValue * 5;
  const multiplyby5 = () => {
    setMainValue(prevVal => prevVal + 1);
  } 

  return (
    <>
      <h1>Main Value: {mainValue}</h1>
      <button onClick={multiplyby5}>Click to multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  )
}

export default App
