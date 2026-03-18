import './assets/css/App.scss'
import Menu from './components/Menu.jsx';
import Clickergl from "./pages/Clicker.jsx";
import { useState } from 'react'


function App() {
    const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 1, itemstobuy: 0})

    const handleClick = () => {
        // analog
        // Object.assign({}, stats) or
        // JSON.parse(JSON.stringify(stats)) or
        // _.cloneDeep(stats)

        let newstats = {...stats}
        // Kasvatetaan napautusten lukumäärää yhdellä.
        newstats.clicks = newstats.clicks + 1;
        // Tallennetaan päivitetty stats-muuttuja.
        setStats(newstats);
    }
        // const handleClick = () => {
        //TODO: tarvitaan kysyä opettajan, miksi tarvitse "setClicks" methodi
        // return setClicks(clicks + 1)
    // }

  return (
          <>
              <div className="root">
                  <div className="root_content">
                      <Clicker stats={stats} handleClick={handleClick} />
                  </div>
                  <Menu items={stats.itemstobuy} />
              </div>
          </>
      )
}

export default App
