const fs = require('fs')

const tmcWithBtc = require('../step2/total-market-cap-with-btc.json')
const tmcNoBtc = require('../step2/total-market-cap-no-btc.json')

// Total market cap with BTC

const mcWithBtc = tmcWithBtc['market_cap_by_available_supply'].map(mcArr => {
  return { date: mcArr[0].slice(0, 10).replace(/-/g, ''), value: mcArr[1]}
})

fs.writeFileSync('mc-20150705-20180701-with-btc.json', JSON.stringify(mcWithBtc, null, 2))
console.log('Records written to file:', mcWithBtc.length)

// Total market cap without BTC

const mcNoBtc = tmcNoBtc['market_cap_by_available_supply'].map(mcArr => {
  return { date: mcArr[0].slice(0, 10).replace(/-/g, ''), value: mcArr[1]}
})

fs.writeFileSync('mc-20150705-20180701-no-btc.json', JSON.stringify(mcNoBtc, null, 2))
console.log('Records written to file:', mcNoBtc.length)
