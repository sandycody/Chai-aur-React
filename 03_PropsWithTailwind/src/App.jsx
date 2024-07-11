import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myArr = [12, 23, 34];
  const myObj = {
    Name: "Sandeep",
    Age: 22,
    Hobby: "Development and Singing"
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card userName="Sandeep Wadhawan" src="https://avatars.githubusercontent.com/u/68498988?v=4" designation="Software Developer" location="(New Delhi, India)"/>
      <Card userName="Hitesh Choudhary" src="https://avatars.githubusercontent.com/u/11613311?v=4" designation="Software Engineer" location=" (Bangalore, India)"/>
    </>
  )
}

export default App
