//Задание 10

var list = new Array;
var string = '';

let vvod = prompt("Enter Number");
vvod = +vvod + +"";


function ProstNum(num) {
    nextPrime: for (var i = 2; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        list.push(i);
    }
    string = string + list;
    console.log(string);
}
if (typeof vvod === 'number' && !isNaN(vvod)) {
    if (vvod < 1000) {
        ProstNum(vvod);
    } else
        console.log('Вы ввели число больше 1000');
} else {
    console.log('Упс, кажется вы ошиблись')
}