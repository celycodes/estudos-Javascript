const person = { name: 'Daniel', age: 17}
const person2 = { name: 'Krystian', age: 21}
const person3 = { name: 'San', age: 22}

const friends = [person, person2, person3]
// recuperar o nome da person2 com destruturação
const [, {name}] = friends
console.log(name) // saída : Krystian

// desestruturação de arrays dentro de arrays
const chart = [[1,2], [3,4], [5,6]]
const [, , [x,y]] = chart
console.log(x) //  saída : 5
console.log(y) //  saída : 6