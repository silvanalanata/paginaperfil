let nombre =  document.getElementById("name");
function profile(){

  if (nombre.innerHTML == 'Jane Doe') 
      nombre.innerHTML = 'Silvana Lanata';
  else nombre.innerHTML = 'Jane Doe'; 
}

let recuadro =  document.getElementById("recuadro1");

function remover(){
  recuadro.remove();
  
}

let recuadro2 =  document.getElementById("recuadro2");

function remover2(){
  recuadro2.remove();
}

let likes = 418;
var total;

function aceptar(){
  likes=likes+1;
  total = document.querySelector(".noti2");
  total.innerText = likes;
  
}

function restar(){
  total=total-1;
  var count = document.querySelector(".noti2");
  count.innerText = total;

}