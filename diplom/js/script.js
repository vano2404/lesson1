
window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    // модальные окна 
    let popup = document.querySelector(".popup"),
		popupEngineer = document.querySelector(".popup_engineer"),
		body = document.querySelector("body");
        let closeFormStrong = document.querySelectorAll('popup_close, strong');
        console.log(closeFormStrong);
        
    closeFormStrong.forEach(function(elem){
        elem.classList.add('close_x');
    });
	function buttonClick(elem) {
		elem.style.display = "block";
		document.body.style.overflow = "hidden";
	}

    function closeFormBody(modCloseBtn) {
		popup.style.display = "none";
        popupEngineer.style.display ='none';
		document.body.style.overflow = "";
	} 
	body.addEventListener("click", e => {
		let target = e.target;

		if (target && target.classList.contains("header_btn")) {
			e.preventDefault();
			buttonClick(popupEngineer);
		}
		if (target && target.classList.contains("phone_link")) {
			e.preventDefault();
			buttonClick(popup);
		}
		if (target && target.classList.contains('close_x') || target.classList.contains("popup_engineer") || target.classList.contains('popup')) {
			closeFormBody(target);
		}
	});
	setTimeout(function velcom() {
		buttonClick(popup);
	}, 60000);
    // form форма   проверка инпутов 

    let mesagge = {
        loadind:'Загрузка...',
        success:'Спасибо! Скоро мы с вами свяжемся',
        failure:'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('.form'),
        input = document.getElementsByTagName("input"),
        inputNumbers = document.querySelectorAll('input[name="user_phone"]'),
        statusMessage = document.createElement('div');
        console.log(inputNumbers);
 
        for (let i = 0; i< inputNumbers.length;i++){
            let inputNumbersall = inputNumbers[i];
            inputNumbersall.addEventListener('input', function(){
                this.value = this.value.replace(/[^0-9]/, '');
            })
        }

        function sendForm(elem) {
            elem.addEventListener('submit',function(event){
                event.preventDefault();
                elem.appendChild(statusMessage);
                
                let formData = new FormData(elem);

                function postData(data){
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();

                        request.open('POST','server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function(){
                            if(request.readyState < 4) {
                                resolve()
                                // statusMessage.classList.add('loading');
                            }else if (request.readyState === 4 && request.status === 200){
                                resolve()
                                // statusMessage.classList.remove('loading');
                                // statusMessage.classList.add('success');
                            }else {
                                reject()
                                // statusMessage.classList.add('failure');
                            }
                        }
                        request.send(data);
                    });    
                }
                function clearInput(){
                    for(let i =0; i<input.length;i++){
                        input[i].value = '';
                    }
                }
                // function formDel (elem){
                //     elem = {}
                //     return elem
                // }
                postData(formData).then(() => statusMessage.innerHTML = mesagge.loadind).then(() => statusMessage.innerHTML = mesagge.success)
                .catch(() => statusMessage.innerHTML = mesagge.failure) 
                .then(clearInput)      
            });
        };
        form.forEach(function(elem){
            sendForm(elem);
        })
    //tabs one табы с окнами

    let glazing = document.querySelectorAll(".glazing_slider")[0],
		tabContent = document.querySelectorAll(".glazing_type"),
		tab = document.querySelectorAll(".glazing_block"),
        act = document.querySelectorAll('.act');//  класс внутри тега <а> для добавления классов active no_active
		console.log(glazing);

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
		
		for (let i = a; i < act.length;i++){
            act[i].classList.remove('active');
            act[i].classList.add('no_active');
        }
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
		
		if (act[b].classList.contains('no_active')) {
            act[b].classList.remove('no_active');
            act[b].classList.add('active');
        }
	}
	glazing.addEventListener("click", function(elem)  {
		let target = elem.target;

		if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
			for(let i =0; i<tab.length;i++){
				if(target == tab[i] || target.parentNode == tab[i]){
					hideTabContent(0);
					showTabContent(i);
				}
			}
		}
	});
    // tabs two табы с отделкой

    
    let sliderDecoration = document.querySelector('.decoration_slider'),
        decorationContent = document.querySelectorAll('.cont_dec'),
        furnishActive = document.querySelectorAll('.furnishActive');

    function hideFurnish (a){
        for (let i = a; i<decorationContent.length;i++){
            decorationContent[i].classList.remove('show');
            decorationContent[i].classList.add('hide');
        }

        for(let i = a; i< furnishActive.length;i++){
            furnishActive[i].classList.remove('after_click');
            furnishActive[i].classList.add('no_click');
        }
        
    }
    hideFurnish(1);
    function showfurnish (b){
        if(decorationContent[b].classList.contains('hide')){
            decorationContent[b].classList.remove('hide');
            decorationContent[b].classList.add('show');
            
        }
        if (furnishActive[b].classList.contains('no_click')){
            furnishActive[b].classList.remove('no_click');
            furnishActive[b].classList.add('after_click');
        }
    }
    sliderDecoration.addEventListener('click', function(elem){
        let target = event.target;
        if (target && target.classList.contains('furnishActive')|| target.parentNode.classList.contains('furnishActive')){
            for (let i = 0; i < furnishActive.length;i++){
                if(target == furnishActive[i] || target.parentNode == furnishActive[i]){
                    hideFurnish(0);
                    showfurnish(i);
                }
            }
        }
    });
});

    



	
    
      
    


