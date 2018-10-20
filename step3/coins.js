const fs = require('fs')
const coinSymbols = require('../step1/coins-all-20180706.json')
const snapsAllCoins = require('../step2/coins-20150705-20180701.json')

// Make sure that the names are lower case for the comparison
const coinSymbolsLower = coinSymbols.map(coinName => coinName.toLowerCase())

// Store the final formatted data
const coins = []

// Extract only data about coins that we care about, stored in coinSymbols
Object.keys(snapsAllCoins).map(date => {

  const snapFiltered = snapsAllCoins[date].filter(coinArr => coinSymbolsLower.includes(coinArr[1].toLowerCase()))

  snapFiltered.forEach((coinArr) => {
    if (coinArr.length !== 7) {
      throw new Error('coinArr length is NOT 7, length:', coinArr.length)
    }

    const coin = {}
    coin['date'] = date
    // Array data format from coinmarketcappy:
    // [rank, symbol, name, market_cap, price, circulating_supply, 24hr_volume]
    coin['rank'] = coinArr[0]
    coin['symbol'] = coinArr[1]
    coin['name'] = coinArr[2]
    coin['market_cap'] = coinArr[3]
    coin['price'] = coinArr[4]
    coin['circulating_supply'] = coinArr[5]
    coin['24hr_volume'] = coinArr[6]
    coins.push(coin)
  })
})

fs.writeFileSync('coins-20150705-20180701-filtered.json', JSON.stringify(coins, null, 2))
console.log('Records written to file:', coins.length)
