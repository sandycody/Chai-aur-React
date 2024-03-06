import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>My Custom App</h1>
      <p style={{ marginTop: '40px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aut eaque architecto eius perferendis veniam dicta, sequi unde mollitia vero ducimus sint corporis autem tempore quis tenetur, quidem reiciendis? Sit, eos. Odit quidem asperiores rem sequi, culpa aperiam est exercitationem officiis quia, animi sint? Sequi sit modi eligendi suscipit consequatur nostrum corrupti velit omnis?</p>
    </>
  );
}

// custom React element
const customReactElement = {
  type: "a",
  props: {
    href: "https://github.com/sandycody",
    target: '_blank'
  },
  children: "Visit this github link"
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit this Google link</a>
)


const anotherUser = "Tea with React"
// According to react and for that we have to use (import React from 'react' which is already there)
const reactElement = React.createElement( 
  'a', //type
  {href: "https://youtube.com", target: '_blank'}, //Object
  'Click to play youtube ',
  anotherUser //evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
    // reactElement
    // App() --> This can also done as App() is function but we don't have to use this as this is very bad syntax and optimisation, code convention mein problems aa jaati hai bigger level pe.

  );
