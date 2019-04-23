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
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
                costs = prompt("Во сколько обойдется?", "");
    
            if ( (typeof(itemOfExpenditure)) === 'string' && (typeof(itemOfExpenditure)) != null
                && (typeof(costs)) != null && itemOfExpenditure != '' && costs != ''
                && itemOfExpenditure.length < 50) {
                console.log("done");
                appData.expenses[itemOfExpenditure] = costs;
            } else {
                i--;
            }
        }

    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget /30).toFixed();
        alert("ежедневный бюджет: "+ appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay <100){
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("высокий уровень достатка");
        } else {
            console.log("произошла ошибка");
        } 

    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let nonBindingExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = nonBindingExpenses; 
        };
    },
    chooseIncome: function() {
        let items;
        while (isNaN(items) !== true  || items == "" || items == null){
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');    
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(el, index){
            document.write("Способы доп. заработка: " + ++index + ". " + el + "<br>");
        });
    
    }    
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
  }