
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
dataInput = document.querySelectorAll('.time-data div input'), // инпуты года даты дня
inputAll = document.getElementsByTagName('input'); // все инпуты

// console.log(startBtn);
// console.log(tableResult); // вывод окна доход;
// console.log(itemExpenses); // вывод инпутов  с обязательными расходами
// console.log(affirm); // вывод массива кнопки 
// console.log(itemOptionalexpenses); // вывод инпутов с необязательными расходами
// console.log(labelChooseIncome);// заголовок выведете статьи
// console.log(chooseIncome); //  инпут для ввода статей возможного дохода
// console.log(checksavings); // накопления
// console.log(label); // вывод элементов с тегом label сумма проценты
// console.log(summValue); // инпут сумма
// console.log(percentValue); // инпут проценты
// console.log(dataClass); // вывод массива с годом месяцем днем 
// console.log(dataInput); // вывод с инпутами
// console.log(inputAll); // вывод всех инпутов 

for (let i =0; i < inputAll.length; i++){
        let inputOffBlock = inputAll[i];
        inputOffBlock.setAttribute('disabled', "disabled");
}
for (let i =0; i < affirm.length; i++){
    let blockButton = affirm[i];
    blockButton.disabled = true;
    blockButton.style.background = 'grey';
    blockButton.style.cursor = 'default';
}
startBtn.disabled = false;
startBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
startBtn.style.cursor = 'pointer';


let money,time;
startBtn.addEventListener('click', function() {
    for (let i =0; i < inputAll.length; i++){
        let inputOffBlock = inputAll[i];
        inputOffBlock.removeAttribute('disabled');
    }
    affirm[2].disabled = false;
    affirm[2].style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    affirm[2].style.cursor = 'pointer';
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
    dataInput[2].value = new Date(Date.parse(time)).getDate() ;
});
for (  let i = 0; i < itemExpenses.length; i++){
    let expensesSet = itemExpenses[i];
   expensesSet.setAttribute('disabled', "disabled");
   expensesSet.addEventListener('input', function(){
    Array.from (itemExpenses).some(function(item){
        if(item.value.length !== 0){
            affirm[0].removeAttribute('disabled');
            affirm[0].style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
            affirm[0].style.cursor = 'pointer';
        }else {
            affirm[0].style.background = 'grey';
            affirm[0].style.cursor = 'default';
            affirm[0].setAttribute('disabled', "disabled"); 
        }
    });
});
}
affirm[0].addEventListener('click', function(){
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
});
let optionalExpenses, j;
for ( j = 0; j < itemOptionalexpenses.length; j++){
    optionalExpenses = itemOptionalexpenses[j];
    optionalExpenses.setAttribute('disabled', "disabled");
    optionalExpenses.addEventListener('keyup', function(){
        Array.from (itemOptionalexpenses).some(function(item){
            if(item.value.length !== 0){
            affirm[1].removeAttribute('disabled');
            affirm[1].style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
            affirm[1].style.cursor = 'pointer';
        } else {
            affirm[1].style.background = 'grey';
            affirm[1].style.cursor = 'default';
            affirm[1].setAttribute('disabled', "disabled");   
        }   
    });    
});
}
affirm[1].addEventListener('click', function(){
    for (let i = 0; i < itemOptionalexpenses.length; i++) {
        let nonBindingExpenses = itemOptionalexpenses[i].value;
        appData.optionalExpenses[i] = nonBindingExpenses;
        tableResult[9].textContent += appData.optionalExpenses[i] + ' ';
    }
        
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
