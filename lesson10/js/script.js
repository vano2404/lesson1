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
        


    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
        
    });
    for (let i =0; i < descriptionBtn.length;i++){
        let button = descriptionBtn[i];
        button.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

        });
    }
});