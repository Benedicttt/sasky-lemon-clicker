import './assets/css/App.scss'
import AppRouter from './components/AppRouter'
import { useState } from 'react'
import items from "./config/items.js";
import useLocalStorage from './utils/useLocalStorage'

function App() {
    const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 10, itemstobuy: 0})
    const [storeitems,setStoreItems, resetStoreItems] = useLocalStorage('lemon-items',items)


    // const handleClick = () => {
    //TODO: tarvitaan kysyä opettajan, miksi tarvitse "setClicks" methodi
    // return setClicks(clicks + 1)
    // }


    const handleClick = () => {
        // analog
        // Object.assign({}, stats) or
        // JSON.parse(JSON.stringify(stats)) or
        // _.cloneDeep(stats)

        let newstats = {...stats}
        newstats.balance = newstats.balance + newstats.increase
        setStats(newstats);
    }

    return (
        //                                            !!!!!!
        // Router from local must be always first start!!!!!
        // If dont start firstli NavLink from reactor-router dont work, because router dont work from context componets

        <AppRouter stats={stats}
                   storeitems={storeitems}
                   handleClick={handleClick}
            // handlePurchase={handlePurchase}
            // handleReset={handleReset}
        />
    )
}

export default App
