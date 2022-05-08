num = Number(prompt('Digite um número:'))
result = 1;

for (var i = num; i > 1; i--) {
  result *= i;
}

console.log(`Fatorial de ${num} = ${result}`)