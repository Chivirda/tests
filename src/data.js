let data = require('../../../Downloads/response (1).json')

let dates = data.list.map(d => d.date.value, d.user.value)

console.log(dates);