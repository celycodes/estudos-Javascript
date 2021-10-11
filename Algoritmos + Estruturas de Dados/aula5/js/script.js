// inserindo elementos no Array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Adicionar um item ao final do Array (push)
numbers.push(10);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Adicionar ao início do Array (unshift)
numbers.unshift(-1);
//[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remover um item do final do Array
numbers.pop();
//[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] (remove 10 do final)

//Remover do início do Array
numbers.shift();
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] (remove -1 do começo)

// Usando o metodo Slice
// - Remover um item pela posição do índice
numbers.splice(3, 2);
// [0, 1, 2, 5, 6, 7, 8, 9]
// Adicionar novamente esses itens que eu removi em seus indices usando splice
numbers.splice(3, 0, 3, 4)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
