import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function decrementar() {
    if (count > 0) {
      setCount((valor) => valor - 1);
    }
  }

  return (
    <>
      
      <h2>Contador de clicks</h2>
      <div class="d-grid gap-2 col-6 mx-auto" >
        <button class="btn btn-primary " onClick={() => setCount((count) => count + 1)}>
         Incrementar
        </button>
        <h1>
          {count}
        </h1>
        <button class="btn btn-danger" onClick={decrementar}>
         Decrementar
        </button>


        
      </div>
      
    </>
  )
}

export default App
