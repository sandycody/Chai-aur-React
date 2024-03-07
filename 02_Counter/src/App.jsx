// UI mein cheeze update karne ke liye we need hooks in react and unn hooks ke thorugh hi data update hoga  

import { useState } from 'react' // importing of hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Using of useState hook --> The React useState hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

  let [counter, setCounter] = useState(0); //yaha counter mein default value 5 hogi joki humne useState() mein di hai, we can give any default value in useState()

  // let counter = 5;
  // const h2 = document.querySelector('h2');

  const addValue = () => {

    // Check where counter value not more than 20 is shown on browser
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
    // Check where negative value of counter is not shown on browser
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai with React</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <button onClick={decreaseValue} style={{marginTop : "20px"}}>Remove value : {counter}</button>
    </>
  )
}

export default App
