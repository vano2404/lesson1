window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        hederInfo = document.querySelector('.info-header'),
        tabcontentInfoFade = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(tabContent){
        for (let i = tabContent; i< tabcontentInfoFade.length; i++){
            tabcontentInfoFade[i].classList.remove('show');
            tabcontentInfoFade[i].classList.add('hide');
        }

    }
    hideTabContent(1);

    function showTabContent(tabContentHide) {
        if(tabcontentInfoFade[tabContentHide].classList.contains('hide')){
            tabcontentInfoFade[tabContentHide].classList.remove('hide');
            tabcontentInfoFade[tabContentHide].classList.add('show');
        }
    }
    hederInfo.addEventListener('click', function(event){
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
});