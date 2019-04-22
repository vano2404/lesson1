
let week = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
let tyDay = "Чт";
    for (let i = 0; i < week.length; i++) {
        
    if (week[i] == 'Сб' || week[i] == 'Вс') {
        document.write('<b><br>' + week[i] + '</b>'); 
    } else if(week[i] == tyDay) {
        document.write('<br><i>'+ week[i] + '</i>');
        
    } else  {
        
        document.write('<br>' + week[i]);
    } 
}
console.log (week);



let arr = ['3325','2345','4756','7654','6721','3890','7492'];
 arr.forEach(function(elem){
    if(elem[0] == 3 || elem[0] == 7){
      console.log(elem);
    }
  });


  
  

  


