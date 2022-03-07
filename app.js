const Listacores = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

var button = document.getElementById('Button_ID')
var span = document.getElementById('colour_text')

function numeroRandomico(){ 
  var ex = '#';
  while (ex.length < 7){
    ex += Listacores[Math.floor(Math.random() * 16)]
}  
  return ex 
}   

function quandoClicar(){
  
  var cor = numeroRandomico();
  document.body.style.backgroundColor = cor
  span.textContent = cor   
}
button.addEventListener('click' , quandoClicar)