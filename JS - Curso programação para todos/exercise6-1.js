console.log("== Exercise == ");
var a = parseInt(prompt("valor de A:"));
var b = parseInt(prompt("valor de B:"));
var c = 0;

if (a==b) {
  c = a+b;
  console.log(`${a} + ${b}=${c}`)
} else{
  c = a*b;
  console.log(`${a} * ${b} = ${c}`)
}