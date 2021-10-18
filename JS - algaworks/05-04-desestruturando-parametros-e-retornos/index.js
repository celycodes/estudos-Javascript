function createUser ({name, age, email}) {
  return {
    name, 
    age, 
    contact: {email}
  }
}

const user = createUser({name:'Lassy', age: 14, email: 'lassysousa@mail.com'})
console.log(user)