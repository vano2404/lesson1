'use strict'
let money = prompt("Ваш бюджет на месяц?"),
time = prompt( "Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};
let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце"),
costs = prompt("Во сколько обойдется?");
appData.expenses[itemOfExpenditure] = costs;

itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце"),
costs = prompt("Во сколько обойдется?");
appData.expenses[itemOfExpenditure] = costs;
console.log(appData);
let dayBudget = appData.budget /30;
alert("бюджет на 1 день составляет "+ dayBudget + " рублей");