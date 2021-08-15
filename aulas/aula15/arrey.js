let num = [24, 11, 3, 6, 9]

console.log(`Nosso vetor é contem os números  ${num}`)
num.push(1) // adicionar valores
console.log(`O novo arrey é ${num}`)
console.log(`O vetor tem o tamanho ${num.length}`) // comprimento do arrey

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}