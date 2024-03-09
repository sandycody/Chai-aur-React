import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8); //8 is the default length of password

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // We create a Password Generator
  const PasswordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }

    setPassword(password)

  }, [length, numberAllowed, charAllowed, setPassword]) //setPassword is used for memoisation (basically for optimisation)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); //for selecting first 100 characters of password
    // How to access our clipboard through window object
    window.navigator.clipboard.writeText(password);
  }, [password]) //dependency is password only as when we copy then only password is selected

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} //reference lene ke liye use ref={} in input
          />
          <button onClick={copyPasswordToClipboard} className='oultine-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:text-green-500'>Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={ e => setLength(e.target.value) }
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed(prev => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers: {numberAllowed}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed(prev => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters: {charAllowed}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
