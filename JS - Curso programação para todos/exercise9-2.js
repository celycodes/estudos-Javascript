n = Number(prompt('Digite um número:'))
qDiv = 0

for (var i=1; i <= n; i++) {
  if (n%i==0) {
    qDiv++;
  }
}

if (qDiv == 2) {
    console.log('PRIMO')
  } else {
    console.log('Não é PRIMO')
  }