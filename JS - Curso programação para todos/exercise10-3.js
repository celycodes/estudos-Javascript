var n = parseInt(prompt("Informe o número n, inteiro e positivo:"));
var soma = 0;
for (var i=1,numerador=1,denominador=1;i<=n;i++){
  numerador= i**2 + 1
  denominador=i+3
  soma += numerador/denominador;
}
console.log("Soma =",soma);