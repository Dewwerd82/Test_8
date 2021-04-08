//Задание 1

let num=prompt("Enter Number");
num = +num + +"";
    if (typeof num === 'number' && !isNaN(num)){
    let ost = num%2
      if (ost > 0){
        console.log('Число нечётное')
      } else {
        console.log('Число чётное')
      }
  } else {
    console.log('Упс, кажется вы ошиблись')
  } 
  
//Задание 2  
  
  let x = ['r','ter'];
  if (typeof x ==='number' && !isNaN(x)) {
console.log(`${x} - число`);
  } else if (typeof x === 'boolean') {
    console.log(`${x} - логическое число`);
  } else if (typeof x === 'string') {
    console.log(`${x} - строка`);
  } else {
    console.log('Тип x не определён');
  }
  
//Задание 3

function reverseStr(str) {
let newStr = '', i;
   for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
} 
console.log(reverseStr('Hello'));  

//Задание 4

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(0,100));

//Задание 5

let arr = [1,4,10,15,20];
console.log(arr.length);
arr.forEach(function(item) {
  console.log(item);
})


//Задание 6

let arr = [2,3,2,15,3];
console.log(arr.length);
var n = 0;
var m = 0;
var x = 1;
  var ln1 = arr.length;// Длина массива
    for (var i = 0; i < ln1; ++i){     
      n = i ;
      console.log(arr[i]);//Вывод каждого элемента массива
         for (var j = 0; j < ln1;++j){                          
              if (arr[i] == arr[j] && i != j ){
                m = j ;
                 console.log("Совпал" + n +"элемент со" + m + "элементом");
                x++;
              }          
    }       
      if ( x > 1 ) {
        console.log("Совпадений" + x );
      }     
      x = 1;
    }  
	
	
//Задание 7

var arr = [1,0,true,15,20];
var n = 0;
var i = 0;
var j = 0;
var z = 0;
arr.forEach(function(item) {
  console.log(item);
    if (typeof item ==='number' && !isNaN(item)) {
      if (item != 0 ) {
        n = item % 2 ;
      if (n > 0){
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
} 
           )
console.log('Количество чётных сисел    ' + j );
console.log('Количество нечётных сисел   ' + i );
console.log('Количество 0  ' + z );

//Задание 8 

let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

]);
for (let pair of fruits) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

fruits.forEach(function(value,key) {
  console.log('Ключ = ' + key +', значение = ' + value);    
});

//Задание 9

var arr = [1,0,true,15,20];
var n = 0;
var i = 0;
var j = 0;
var z = 0;
function arrtype() {
arr.forEach(function(item) {
  console.log(item);
    if (typeof item ==='number' && !isNaN(item)) {
      if (item != 0 ) {
        n = item % 2 ;
      if (n > 0){
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
} 
           )
console.log('Количество чётных сисел    ' + j );
console.log('Количество нечётных сисел   ' + i );
console.log('Количество 0  ' + z );
};
arrtype();

//Задание 10

var list = new Array;
var string = '';

let vvod = prompt("Enter Number");
vvod = +vvod + +"";


  function ProstNum (num){    
      nextPrime:
      for (var i = 2; i <= num; i++) {
        for (var j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        list.push(i);
      }
    string = string + list;
    console.log(string);   
  }
  if (typeof vvod === 'number' && !isNaN(vvod)){
    if (vvod < 1000) {
        ProstNum(vvod);
    } else
      console.log('Вы ввели число больше 1000');
  } else {
    console.log('Упс, кажется вы ошиблись')
  } 
    







