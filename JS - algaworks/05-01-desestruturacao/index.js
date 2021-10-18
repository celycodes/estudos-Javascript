const person = {
  name: 'Lassy',
  age: 14
}

function introduce ({name, age}) {
  return `Olá, meu nome é ${name} e eu tenho ${age} anos.`
}

console.log(introduce(person))

const fruits = ['banana', 'kiwi', 'abacate']
const [firstFruit, secondFruit] = fruits

console.log(firstFruit)