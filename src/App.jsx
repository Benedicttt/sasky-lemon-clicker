import './assets/css/App.scss'
import AppRouter from './components/AppRouter'
import { useState } from 'react'
import items from "./config/items.js";
import useLocalStorage from './utils/useLocalStorage'

function App() {
    const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 1, itemstobuy: 0})
    const [storeitems,setStoreitems, resetStoreitems] = useLocalStorage('lemon-items',items)

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
      <AppRouter stats={stats}
                 storeitems={storeitems}
                 handleClick={handleClick}
                 // handlePurchase={handlePurchase}
                 // handleReset={handleReset}
      />
  )
}

export default App
