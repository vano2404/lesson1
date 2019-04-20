'use strict'
let money = +prompt("Ваш бюджет на месяц?"),
time = prompt( "Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++){
    let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
        costs = prompt("Во сколько обойдется?", "");

// let i =0;
// while(i < 2){
//   let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       costs = prompt("Во сколько обойдется?", "");
//   i++;

//  let i = 0;
//  do {
//    let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       costs = prompt("Во сколько обойдется?", "");
//    i++;



    if ( (typeof(itemOfExpenditure)) === 'string' && (typeof(itemOfExpenditure)) != null
       && (typeof(costs)) != null && itemOfExpenditure != '' && costs != ''
       && itemOfExpenditure.length < 50){
           console.log("done");
           appData.expenses[itemOfExpenditure] = costs;
       } else {
        i--;
       }
          

}
//  while(i < 2);

 appData.moneyPerDay = appData.budget /30;

alert("ежедневный бюджет: "+ appData.moneyPerDay);
if(appData.moneyPerDay <100){
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("высокий уровень достатка");
} else {
    console.log("произошла ошибка");
}    


