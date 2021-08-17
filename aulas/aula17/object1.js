 let person = {name: 'Lassy',
  gender: 'F',
  weight: 50, 
  fatten(p=0){
    console.log('Engordou') 
    this.weight += p
}}
person.fatten(2)
 console.log(`${person.name} pesa ${person.weight}kg`)