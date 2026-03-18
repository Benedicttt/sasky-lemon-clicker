import './assets/css/App.scss'
import Lemon from "./components/Lemon.jsx";
import Balance from './components/Balance'
import Menu from './components/Menu'

import { useState } from 'react'


function App() {
    const [clicks, setClicks ]= useState(0)
    const handleClick = () => {
        //TODO: tarvitaan kysyä opettajan, miksi tarvitse "setClicks" methodi
        return setClicks(clicks + 1)
    }

  return (
          <>
          <div className="root">
              <div className="root_content">
                  <div className="container clicker">
                      {/*<Header>lemon clicker</Header>*/}
                      <header>lemon clicker</header>
                      <Balance total={clicks} />
                      <Lemon onClick={handleClick} />
                      {/*<Booster value="3.2" />*/}
                      <booster value="3.2" />
                  </div>
              </div>
              <Menu items={2} />
          </div>
          </>
      )
}

export default App
