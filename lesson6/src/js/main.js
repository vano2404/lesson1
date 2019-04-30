'use strict'
let startBtn = document.getElementById('start'),
tableResult = document.querySelectorAll('.result-table div'), // панель доход
itemExpenses = document.getElementsByClassName('expenses-item'), // инпуты с обязательными расходами
affirm = document.getElementsByTagName('button'), // кнопки  
itemOptionalexpenses = document.querySelectorAll('.optionalexpenses-item'),// инпунты с необязательными расходами
labelChooseIncome = document.querySelector('.choose-income-label'),// заголовок выведете статьи
chooseIncome = document.querySelector('.choose-income'),  //ввод статей возможного дохода
checksavings = document.querySelectorAll('.checksavings'), // накопления
label = document.querySelectorAll('.data label'),// заголовки элементов сумма проценты
summValue = document.querySelector('#sum'), // инпут сумма
percentValue = document.querySelector('#percent'), // инпут процент
dataClass = document.querySelectorAll('.time-data div'), // год месяц день
dataInput = document.querySelectorAll('.time-data div input'); // инпуты года даты дня
affirm[1].disabled = true;
affirm[0].disabled = true;
affirm[2].disabled = true;
console.log(tableResult); // вывод окна доход;
console.log(itemExpenses); // вывод инпутов  с обязательными расходами
console.log(affirm); // вывод массива кнопки 
console.log(itemOptionalexpenses); // вывод инпутов с необязательными расходами
console.log(labelChooseIncome);// заголовок выведете статьи
console.log(chooseIncome); //  инпут для ввода статей возможного дохода
console.log(checksavings); // накопления
console.log(label); // вывод элементов с тегом label сумма проценты
console.log(summValue); // инпут сумма
console.log(percentValue); // инпут проценты
console.log(dataClass); // вывод массива с годом месяцем днем 
console.log(dataInput); // вывод с инпутами

let money,time;

startBtn.addEventListener('click', function() {
    if ('click' !== true){
        affirm[1].disabled = false;
        affirm[0].disabled = false;
        affirm[2].disabled = false;
        time = prompt( "Введите дату в формате YYYY-MM-DD");
        money = +prompt("Ваш бюджет на месяц?");
    
        while(isNaN(money)|| money == "" || money == null){
            money = +prompt("Ваш бюджет на месяц?");
        }
        appData.budget = money;
        appData.timeData = time;
        tableResult[1].textContent = money.toFixed();
        dataInput[0].value = new Date(Date.parse(time)).getFullYear();
        dataInput[1].value = new Date(Date.parse(time)).getMonth() +1;
    }    dataInput[2].value = new Date(Date.parse(time)).getDate() ; 

});
affirm[0].addEventListener('click', function(){
    if (itemExpenses[0].value && itemExpenses[1].value && itemExpenses[2].value && itemExpenses[3].value){
        let sum = 0;
          for (let i = 0; i < itemExpenses.length ; i++){
              let itemOfExpenditure = itemExpenses[i].value,
                  costs = itemExpenses[++i].value;
      
              if ( (typeof(itemOfExpenditure)) === 'string' && (typeof(itemOfExpenditure)) != null
                  && (typeof(costs)) != null && itemOfExpenditure != '' && costs != ''
                  && itemOfExpenditure.length < 50)  {
                  console.log("done");
                  appData.expenses[itemOfExpenditure] = costs;
                  sum += +costs;
              } else {
                  i--;
              }
          }
          tableResult[7].textContent = sum;
    }
})

affirm[1].addEventListener('click', function(){
    for (let i = 0; i < itemOptionalexpenses.length; i++) {
        let nonBindingExpenses = itemOptionalexpenses[i].value;
        appData.optionalExpenses[i] = nonBindingExpenses;
        tableResult[9].textContent += appData.optionalExpenses[i] + ' ';
    };
    
});
affirm[2].addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - tableResult[7].textContent)/30).toFixed();
        tableResult[3].textContent = appData.moneyPerDay;

        if(appData.moneyPerDay <100){
            tableResult[5].textContent = 'минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            tableResult[5].textContent = 'средний уровень достатка';
        } else if (appData.moneyPerDay > 2000){
            tableResult[5].textContent = 'высокий уровень достатка';
        } else {
            tableResult[5].textContent = 'произошла ошибка';
        }
    } 
});
chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value; 
        appData.income = items.split(", ");
        tableResult[11].textContent = items;

});
checksavings[0].addEventListener('click', function(){
    if(appData.savings == true){
       appData.savings = false;
    } else {
        appData.savings = true;
    }

});
summValue.addEventListener('input', function(){
    if(appData.savings == true) {
        let summ = +summValue.value,
            percent = +percentValue.value;
        appData.monthIncome = summ/100/12*percent;
        appData.yearIncome = summ/100*percent;

        tableResult[13].textContent = appData.monthIncome.toFixed(1);
        tableResult[15].textContent = appData.yearIncome.toFixed(1);

    }

});
percentValue.addEventListener('input', function(){
    if(appData.savings == true) {
        let summ = +summValue.value,
            percent = +percentValue.value;
        appData.monthIncome = summ/100/12*percent;
        appData.yearIncome = summ/100*percent;

        tableResult[13].textContent = appData.monthIncome.toFixed(1);
        tableResult[15].textContent = appData.yearIncome.toFixed(1);

    }

});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
  };
