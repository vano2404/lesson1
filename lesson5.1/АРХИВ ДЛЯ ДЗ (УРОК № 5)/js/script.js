let menu = document.querySelector('.menu'),
  column = document.querySelectorAll('.column'),
  menuItems = document.querySelectorAll('.menu-item'),
  menuItemLi = document.createElement('li'),
  title = document.getElementById('title'),
  adv = document.querySelector('.adv');
  questionPrompt = document.getElementById('prompt'),
  question = prompt('Как вы относитесь к технике apple ?');

menuItemLi.classList.add('menu-item');
menu.appendChild(menuItemLi);
menuItemLi.innerHTML = 'пятый пункт';
menu.insertBefore(menuItems[2], menuItems[1]);


document.body.style.background = "url('img/apple_true.jpg') center no-repeat"; 

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(adv);

questionPrompt.innerHTML = question; 


