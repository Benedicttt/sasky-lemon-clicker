import './assets/css/App.scss'
import Lemon from "./components/Lemon.jsx";
import Balance from './components/Balance'
import { useState } from 'react'


function App() {
    const [clicks, setClicks ]= useState(0)
    const handleClick = () => {
        //TODO: tarvitaan kysyä opettajan, miksi tarvitse "setClicks" methodi
        return setClicks(clicks + 1)
    }

  return (
          <>
            <div>
              <Balance total={clicks} />
              <button onClick={handleClick}>napauta</button>
              <Lemon onClick={handleClick}/>
            </div>
          </>
      )
}

export default App
