function forms() {

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
}
module.exports = forms;