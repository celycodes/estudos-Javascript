var agora = new Date()

console.log('Hoje o dia é :')
var diaSem = agora.getDay()
 switch (diaSem) {
    case 0:
        console.log('Domindo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERROR! Dia inválido')
        break
 }