let casillas=document.getElementsByTagName("td");
for(let casilla of casillas){
    casilla.addEventListener('mouseover',entro);
    casilla.addEventListener('mouseout',salio);
}
function entro(event){
    event.target.style.backgroundColor='green';
}
function salio(event){
    event.target.style.backgroundColor='white';
}