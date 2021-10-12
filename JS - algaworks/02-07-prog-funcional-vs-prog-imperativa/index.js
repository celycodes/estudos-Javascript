var person = {
  age: 17,
  name: 'Lassy'
}

// função pura (não altera o objeto original)
function getRemainingYearsToMajorty (person) {
  return 18 - person.age
}
// função imperativa ou impura - gera efeitos colaterais
function increasePersonAge (person) {
  person.age += 1
}
// chamando método impuro
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears)