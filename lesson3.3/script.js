'use strict'
// У вас есть str = “урок-3-был слишком легким”

let str = "урок-3-был слишком легким";
let replaceDash;

function toTitle(){
    replaceDash = str[0].toUpperCase() + str.slice(1);
    return  replaceDash.replace(/-/g, " ");
}
 console.log(toTitle());

let change;

function cutChange () {
    change = str.substr(19,25);
    return change.replace(/им/, "оо");
}
    document.write(cutChange());

// У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]

 let arr = [20, 33, 1, "Человек", 2, 3],
     summ =0;

     arr.splice(3,1);
 let newArr = arr.map(function(elem) {
	return (elem ** 3);
});
	for (let i = 0; i < newArr.length; i++) {
     summ += newArr[i];
 }
   console.log(arr);
   console.log(Math.sqrt(summ));
   
// Создайте функцию, которая принимает 1 аргумент (название произвольное)
   
function writeText  (text){
    if((typeof(text)) === "string" && (text.length > 50)) {
        text = text.substr(0,50) + '...';
        console.log(text.trim());
     } else if (text.length < 50) {
         console.log(text.trim());
     } else {
         alert ('не строка');
         console.log(text);
     }
}
    writeText('      hhhhhh    ');
    writeText(22222);