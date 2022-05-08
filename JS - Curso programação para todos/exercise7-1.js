console.log('---- CLASSE ELEITORAL 2022 ----')
age = Number(prompt('Informe sua idade:'))

if (age < 16) {
  console.log('NÃO ELEITOR')
} else {
  if (age >= 18 && age < 65) {
      console.log('ELEITOR OBRIGATÓRIO')
  } else {
    if (age > 15 || age < 18 && age > 64) {
        console.log('ELEITOR FACULTATIVO')    
    }
  }
}