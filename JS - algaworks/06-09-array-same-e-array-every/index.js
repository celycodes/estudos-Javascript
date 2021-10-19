const guests = [
    {name: 'River', age: 40},
    {name: 'Eren', age: 26},
    {name: 'Summer', age: 17},
    {name: 'Zion', age: 35},
    {name: 'Collin', age:18}
]

// existem maiores de idade na lista de convidados?
const hasAdults = guests.some(guest => guest.age >= 18)
console.log(hasAdults) // true

// todos os convidados são maiores de idade?
const everyoneIsAnAdults = guests.every(guest => guest.age >= 18)
console.log(everyoneIsAnAdults) // false