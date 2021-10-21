// (pipe vs and)
type Cpf = string | number

// union (ou)
function findPerson (cpf: Cpf) {
  if (typeof cpf === 'string') {
    return cpf.toLocaleUpperCase()
  }
  return cpf.toFixed(2)
}

// intesection (e)
type Animal = {sex: 'male' | 'female'}
type Human = { hungry: boolean}

type Person = Animal & Human

function getPersonStatus (person: Person) {
  return person.hungry
}