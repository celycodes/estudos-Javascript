const person = {
  name: 'Lucas',
  age: 23,
  contact: {
    email: 'lassysousa@mail.com' 
  }
}

const {name, age, contact: {email}} = person

console.log(name)
console.log(age)
