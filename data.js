const rawData = require('./response.json')
const util = require('util')

const userComments = {}

let names = new Set(rawData.list.map(item => item.user.value))

for (let name of names) userComments[name] = {}


for (let user in userComments) {
  userComments[user].result = []
  rawData.list.forEach(item => {
    if (user === item.user.value) {
      let obj = {}
      obj.date = item.date.value
      obj.comment = item.comment.value
      obj.eventType = item.event_type.value
      userComments[user].result.push(obj)
    }
  })
}

console.log(util.inspect(userComments, false, null, true))