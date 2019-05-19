function tabs() {
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
}
module.exports = tabs;