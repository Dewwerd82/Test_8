//Задание 6

let arr = [2, 3, 2, 15, 3];
console.log(arr.length);
var n = 0;
var m = 0;
var x = 1;
var ln1 = arr.length; // Длина массива
for (var i = 0; i < ln1; ++i) {
    n = i;
    console.log(arr[i]); //Вывод каждого элемента массива
    for (var j = 0; j < ln1; ++j) {
        if (arr[i] == arr[j] && i != j) {
            m = j;
            console.log("Совпал" + n + "элемент со" + m + "элементом");
            x++;
        }
    }
    if (x > 1) {
        console.log("Совпадений" + x);
    }
    x = 1;
}