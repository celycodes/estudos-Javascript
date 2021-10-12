var person1 = {
  name: 'Celenny', 
  age: 19
}
var person2 = {
  name: 'Luiz', 
  age: 13
}
var person3 = {
  name: 'Lassy', 
  age: 42
}
var list = [person1, person2, person3]
//console.log(list[2].name)

// percorrendo um array
for (var person of list) {
    console.log(person)
}