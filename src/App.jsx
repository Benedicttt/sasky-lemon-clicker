import './assets/css/App.scss'

import { useState } from 'react'
import round from "./utils/round.jsx"
import items from "./config/items.js";
import AppRouter from './components/AppRouter'
import useLocalStorage from './utils/useLocalStorage'
import getPurchasableItems from './utils/getPurchasableItems'

function App() {
    const [storeitems,setStoreitems, resetStoreItems] = useLocalStorage('lemon-items', items)

    const initialstats = {
        clicks: 0,
        balance: 0,
        increase: 1,
        itemstobuy: 0,
        upgrades: 0,
        collected: 0
    }

    const [stats, setStats] = useState(initialstats)
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

        newstats.clicks = newstats.clicks + 1;
        newstats.collected = round(newstats.collected + newstats.increase,1)
        newstats.balance = round(newstats.balance + newstats.increase,1)
        newstats.itemstobuy = countBuyableItems(storeitems,newstats.balance)

        setStats(newstats);
    }

    const handlePurchase = (id) => {
        const index = storeitems.findIndex(storeitem => storeitem.id == id)
        if (stats.balance >= storeitems[index].price) {
            let newstoreitems = [...storeitems]
            let newstats = {...stats}
            newstoreitems[index].qty++
            newstats.balance = round(newstats.balance - newstoreitems[index].price,1)
            newstoreitems[index].price = Math.floor(newstoreitems[index].baseprice * Math.pow(1.15,newstoreitems[index].qty))
            setStoreitems(newstoreitems)
            setStats(newstats)

            let increase = 1
            let upgrades = 0
            for (let i=0; i<newstoreitems.length; i++) {
                upgrades = upgrades + newstoreitems[i].qty
                increase = increase + newstoreitems[i].multiplier*newstoreitems[i].qty
            }
            newstats.increase = round(increase,1)
            newstats.upgrades = upgrades
            newstats.itemstobuy = countBuyableItems(storeitems,newstats.balance)

        }
    }

    const countBuyableItems = (items, balance) => {
        let total = 0
        getPurchasableItems(items).forEach(item => {
            if (item.price <= balance) total++
        })
        return total
    }

    return (
        //                                            !!!!!!
        // Router from local must be always first start!!!!!
        // If dont start firstli NavLink from reactor-router dont work, because router dont work from context componets

        <AppRouter stats={stats}
                   storeitems={storeitems}
                   handleClick={handleClick}
                   handlePurchase={handlePurchase}
            // handleReset={handleReset}
        />
    )
}

export default App
