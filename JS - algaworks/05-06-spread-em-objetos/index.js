const user = {
  name: 'lassysousa',
  email: 'lassysousa@mail.com'
}

const newUser = {...user}

newUser.email = 'joao@zinho.com'
newUser.name = 'joaozinho123'

console.log(user)
console.log(newUser)