let date = new Date(Date.parse('2022-10-01 00:00:00'))
let options = {
    month: 'short',
    day: 'numeric'
}

console.log('Date:', date.toLocaleString('ru-RU', options))