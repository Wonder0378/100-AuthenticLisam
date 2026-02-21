import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GetDefaultValue } from './Server/backendComs'
import './App.css'


import { signIn } from './Authentication'

function App() {

  const id = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  return (
    <>
      <h1>100% Authentic Lisam</h1>
      <button onClick={() => {
        console.log("clicked");
        signIn();
        }}>Click Me</button>
    </>
  )
}

export default App;
