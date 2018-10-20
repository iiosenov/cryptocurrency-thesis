// 1st part: https://api.coinmarketcap.com/v2/ticker/?limit=100&structure=array
// 2nd part: https://api.coinmarketcap.com/v2/ticker/?start=101&limit=50&structure=array

const fs = require('fs')

const first = require('./coins-001-100-20180706.json')
const second = require('./coins-101-150-20180706.json')

const firstArr = first.data.map(i => ({"Symbol": i.symbol.toLowerCase(), "Name": i.name}))
const secondArr = second.data.map(i => ({"Symbol": i.symbol.toLowerCase(), "Name": i.name}))
const all = firstArr.concat(secondArr)

const fileName = 'coins-all-pairs-20180706.json'
fs.writeFileSync(fileName, JSON.stringify(all, null, 2))

console.log('File was written successfully:', fileName)
console.log('Total coin names written:', all.length)
