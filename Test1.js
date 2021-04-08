//Задание 1

let num = prompt("Enter Number");
num = +num + +"";
if (typeof num === 'number' && !isNaN(num)) {
    let ost = num % 2
    if (ost > 0) {
        console.log('Число нечётное')
    } else {
        console.log('Число чётное')
    }
} else {
    console.log('Упс, кажется вы ошиблись')
}