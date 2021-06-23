// https://www.mockaroo.com/
//
const data = require('./MOCK_DATA.json')

//console.log(data)

var modifielsData = data.map((person) => {
    person.first_name = person.first_name.toUpperCase()
    return person
})

//console.log(modifielsData)

var filterResult = modifielsData.filter((person)=>person.id === 3)
console.log(filterResult)
