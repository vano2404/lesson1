'use strict'
let money,time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt( "Введите дату в формате YYYY-MM-DD");

    while(isNaN(money)|| money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
            costs = prompt("Во сколько обойдется?", "");

        if ( (typeof(itemOfExpenditure)) === 'string' && (typeof(itemOfExpenditure)) != null
           && (typeof(costs)) != null && itemOfExpenditure != '' && costs != ''
           && itemOfExpenditure.length < 50){
               console.log("done");
               appData.expenses[itemOfExpenditure] = costs;
           } else {
            i--;
           }
    }
}
chooseExpenses();


function detectDayBudget () {
 appData.moneyPerDay = (appData.budget /30).toFixed();
 alert("ежедневный бюджет: "+ appData.moneyPerDay);
}
detectDayBudget();

function detectLevel (){
if(appData.moneyPerDay <100){
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("высокий уровень достатка");
} else {
    console.log("произошла ошибка");
} 
}
detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

    }
}
checkSavings();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        let nonBindingExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = nonBindingExpenses; 
    };
}
chooseOptExpenses();

console.log(appData);

