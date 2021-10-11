// como acessar os elementos do array por meio da iteração
var fibonacci = [0, 1, 1];

for (var i = 3; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)