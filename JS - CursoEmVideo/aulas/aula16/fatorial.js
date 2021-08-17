function fatorial(n) {
     let fat = 1
     for (let c = n; c > 1; c--) {
         fat *= c
     }
     return fat
}

console.log('A fatorial é ',fatorial(5))