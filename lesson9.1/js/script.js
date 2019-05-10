let inputAge = document.getElementById('age');
inputAge.addEventListener('blur', function(){
      showUser.apply(this,['Burlacu' , 'Ivan']);
      
});
function showUser (surname, name){
      alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
