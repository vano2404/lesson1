function calc() {
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
}
module.exports = calc;