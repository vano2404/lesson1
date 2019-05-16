window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        hederInfo = document.querySelector('.info-header'),
        tabcontentInfoFade = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (tabContent) => {
        for (let i = tabContent; i< tabcontentInfoFade.length; i++){
            tabcontentInfoFade[i].classList.remove('show');
            tabcontentInfoFade[i].classList.add('hide');
        }

    }
    hideTabContent(1);

    let showTabContent = (tabContentHide) => {
        if(tabcontentInfoFade[tabContentHide].classList.contains('hide')){
            tabcontentInfoFade[tabContentHide].classList.remove('hide');
            tabcontentInfoFade[tabContentHide].classList.add('show');
        }
    }
    hederInfo.addEventListener('click', (event) => {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for (let i =0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // timer
    let deadline = "2019-05-09";

    let getTimeRemaning = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds 
        };

    }
    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            let t = getTimeRemaning(endtime);
            if (t.hours < 10){
                t.hours = '0' + t.hours;
            }
                if (t.minutes < 10) {
                    t.minutes = '0' + t.minutes;
                }
                    if (t.seconds < 10){
                        t.seconds = '0' + t.seconds;
                    }
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if(t.total <= 0){
                clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }
    }
    setClock('timer',deadline);

    //modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');
        


    more.addEventListener('click', function()  {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    for (let i =0; i < descriptionBtn.length;i++){
        let button = descriptionBtn[i];
        button.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

        });
    }
    close.addEventListener('click', function()  {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    
    // Form
    let mesagge = {
        loadind:'Загрузка...',
        success:'Спасибо! Скоро мы с вами свяжемся',
        failure:'Что-то пошло не так...'
    };
    let formAll = document.getElementsByTagName('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    for (let i =2; i < input.length;i++){
        let inputAll = input[i];
        inputAll.setAttribute('autocomplete',"off"); 

        inputAll.addEventListener('input', function(){
            input[3].value = input[3].value.replace(/[^+0-9]/, '');
            input[4].value = input[4].value.replace(/[^+0-9]/, '');
        });
    } 
    function sendForm (elem){
        for (let i =0; i< formAll.length;i++){
            let formAlly = formAll[i];  
             
            formAlly.addEventListener('submit', function(event){
                event.preventDefault();
                formAlly.appendChild(statusMessage);
                let formData = new FormData(elem);
                function postData(data){
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();

                        request.open('POST','server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                        request.onreadystatechange = function(){
                            if(request.readyState < 4) {
                                resolve()
                                statusMessage.classList.add('loading');
                            }else if (request.readyState === 4 && request.status === 200){
                                resolve()
                                statusMessage.classList.remove('loading');
                                statusMessage.classList.add('success');
                            }else {
                                reject()
                                statusMessage.classList.add('failure');
                            }
                        }
                        request.send(data);
                    });    
                }
                function clearInput(){
                    for (let i =2; i < input.length;i++){
                    input[i].value = '';
                    }
                }
                postData(formData).then(() => statusMessage.innerHTML = mesagge.loadind).then(() => statusMessage.innerHTML = mesagge.success)
                .catch(() => statusMessage.innerHTML = mesagge.failure) 
                            .then(clearInput)      
            });
        }
    }
    sendForm(formAll[0]);
    sendForm(formAll[1]);




    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prew = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    function showSlides(n){
        if(n < 1) {
            slideIndex = slides.length;
        }
        if (n >slides.length){
            slideIndex = 1;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item)=> item.classList.remove('dot-active'));

        slides[slideIndex -1].style.display = 'block';
        dots[slideIndex -1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }
    function curentSlide(n){
        showSlides(slideIndex = n)
    }
    
    prew.addEventListener('click', function(){
        plusSlides(-1);

    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for(let i = 0; i < dots.length +1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                curentSlide(i);
            }
        }
    });


    // calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('input', function(){
            persons.value = persons.value.replace(/[^0-9]/, '');
            personsSum = +this.value;
            total = ((daysSum + personsSum)*4000)

            if (restDays.value == '' || persons.value == ''){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total*place.options[place.selectedIndex].value;
            }
        });

        restDays.addEventListener('input', function(){
            restDays.value = restDays.value.replace(/[^0-9]/, '');
            daysSum = +this.value;
            total = ((daysSum + personsSum)*4000)

            if (persons.value == '' || restDays.value == ''){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total*place.options[place.selectedIndex].value;
            }
        });

        place.addEventListener('change', function(){
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a *place.options[place.selectedIndex].value;
            }
        });

});