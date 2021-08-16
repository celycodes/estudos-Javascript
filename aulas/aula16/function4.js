// Recursividade
function  fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log('A fatorial é ',fatorial(5))

/* 
5! = 5 x 4 x 3 x 2 x 1 ou 5! = 5 x 4!
logo, n! = n x (n - 1)!
exceto a fatorial de 1! = 1
*/