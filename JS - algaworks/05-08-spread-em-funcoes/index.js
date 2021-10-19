const ingredientes = ['ovo', 'preseunto']
const spices = ['sal', 'pimenta']

// usando o spread operator dentro do argumento de uma função
ingredientes.push(...spices)
console.log(ingredientes)
