import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// React ek khud ka DOM bhi banata hai jisko hum virtual DOM bolte hain and compare it with real DOM ki kitna difference hai dono DOM's mein and jahan bhi elements mein changes required hote hain sirf wahan wahan changes karta hai
const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDOM ka ek method hai createRoot()

// Jase HTML mein browser ka DOM render karta hai HTML ko wase yahan bhi root.render() likhte hain and render hum yahan App ko karte hain

// So basically root.render() is used to render a React component into the DOM
root.render(
  <App /> 
  // We can create custom tags(<App />) in react which is known as JSX (Javascript XML)
);


