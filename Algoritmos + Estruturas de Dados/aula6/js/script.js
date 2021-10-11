// Arrays bidimensionais

var TempWeek = [];

var TempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var TempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

TempWeek[0] = TempWeek1;
TempWeek[1] = TempWeek2;

console.log(TempWeek);
// acessando o elemento na posição 3 do array de indice 0
console.log(TempWeek[0][3]);