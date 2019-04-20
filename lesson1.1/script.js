'use strict'
let num = 33721; //создание переменной

let str = String(num); //преобразование переменной типа number в тип string

let arr = str.split(''); //преобразование переменной типа string в тип object(массив)

console.log (arr);  //вывод массива в консоль 

<<<<<<< HEAD
let multiplication = 1;
  for(let i =0; i<arr.length;i++){
     multiplication *= arr[i];
=======
  let multiplication = 1;
  for(let i =0; i<arr.length;i++){ //перебор элементов массива с помощью цикла
     multiplication *= arr[i];//умножение  элемента массива 
>>>>>>> 804c7b4f52ad6d0618f3323999c727543539e50c
  }
  console.log(multiplication); //вывод произведения элементов массива в консоль

  let exponentiation = multiplication ** 3; //возведение в степень

  console.log(exponentiation); // вывод в консоль элемента возведенного в степень

  let str1 = String(exponentiation); //преобразование переменной типа number в тип string

  let twoDigitOutput = str1.slice(0,2); // обрезание строки до двух символов

  document.write(twoDigitOutput); // вывод на экран результат
 

