const immutableArray = ['select', '*', 'from']
const mutableArray = [...immutableArray]

console.log(mutableArray)
mutableArray.push('lassy')
console.log(mutableArray)
console.log(immutableArray)