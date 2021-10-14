function sum (a, b) {
  console.log(this)
  return a + b
}

const me = { name: 'Lassy'}

console.log(sum.call(me, 2, 3))

console.log(sum.apply(me, [3,2]))