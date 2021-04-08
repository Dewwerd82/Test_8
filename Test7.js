//Задание 7

var arr = [1, 0, true, 15, 20];
var n = 0;
var i = 0;
var j = 0;
var z = 0;
arr.forEach(function(item) {
    console.log(item);
    if (typeof item === 'number' && !isNaN(item)) {
        if (item != 0) {
            n = item % 2;
            if (n > 0) {
                console.log('Число нечётное')
                i++;
            } else {
                console.log('Число чётное');
                j++;
            }
        } else {
            console.log('Число 0');
            z++;
        }

    } else if (typeof item === 'boolean') {
        console.log(`${item} - логическое число`);
    } else if (typeof item === 'string') {
        console.log(`${item} - строка`);
    } else {
        console.log('Тип x не определён');
    }
})
console.log('Количество чётных сисел    ' + j);
console.log('Количество нечётных сисел   ' + i);
console.log('Количество 0  ' + z);