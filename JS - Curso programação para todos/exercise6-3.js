a = Number(prompt('Digite o 1° numero:'));
b = Number(prompt('Digite o 2° numero:'));
c = Number(prompt('Digite o 3° numero:'));

if (a > b) {
  if (b > c) {
      console.log(`${a} ${b} ${c}`)
  } else {
    if (a > c) {
        console.log(`${a} ${c} ${b}`)
    } else {
        console.log(`${c} ${a} ${c}`)
    }
  }
} else {
  if (b > c) {
    if (a > c) {
      console.log(`${b} ${a} ${c}`)
    } else {
      console.log(`${b} ${c} ${a}`)
    }
  } else {
    console.log(`${c} ${b} ${a}`)
  }
}