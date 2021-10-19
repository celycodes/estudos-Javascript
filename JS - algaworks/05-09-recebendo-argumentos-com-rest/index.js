function createUser (name, age, ...contacts) {
  return {
    name, 
    age, 
    contacts
  }
}

person = createUser('Paul Arteides', 17, 'arrakismessias@mail.com', 'dune@mail.com', 'artreideshouse@mail.com', 'chani@mail.com')
console.log(person)