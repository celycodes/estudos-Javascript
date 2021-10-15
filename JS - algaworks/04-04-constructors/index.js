class Human {
  hungry = true
  name 
  age

  constructor (props) {
    if (!props.name)
      throw Error('Nome é obrigatório')
    this.name = props.name
    this.age = props.age
  }

  eat () {
    this.hungry = false
  }
}

const person = new Human({name: 'celenny', age: 19})
console.log(person)