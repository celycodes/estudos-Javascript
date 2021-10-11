// Arrays tridimensionais

var month = [];
var firstWeeks = [];
var lastWeeks = [];

var TempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var TempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];
var TempWeek3 = [29, 45.7, 26, 37, 28.5, 30, 40.6];
var TempWeek4 = [30, 23.7, 26.2, 23, 20, 17, 26.5];

firstWeeks = [TempWeek1, TempWeek2];
lastWeeks = [TempWeek3, TempWeek4]

month = [firstWeeks, lastWeeks];
//console.log(month[1][1]);

// Percorrendo o array tridimensional

for (var x = 0; x < month.length; x++) {
    for (var y = 0; y < month[x].length; y++) {
        for (var z = 0; z < month[x][y].length; z++) {
            console.log(month[x][y][z]);
        }
    }
}