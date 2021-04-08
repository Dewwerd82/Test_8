//Задание 2  

let x = ['r', 'ter'];
if (typeof x === 'number' && !isNaN(x)) {
    console.log(`${x} - число`);
} else if (typeof x === 'boolean') {
    console.log(`${x} - логическое число`);
} else if (typeof x === 'string') {
    console.log(`${x} - строка`);
} else {
    console.log('Тип x не определён');
}