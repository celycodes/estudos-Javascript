function sum () {
  return arguments[0] + arguments[1]
}
// arguments não funcionam com arrow functions
console.log(sum(1,2))