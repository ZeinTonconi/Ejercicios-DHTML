let tabla=document.getElementById("tabla");
let casillas=tabla.getElementsByTagName('td');
for(let casilla of casillas){
    casilla.addEventListener('mousedown',presionar);
    casilla.addEventListener('mouseup',soltar);
}

function presionar(e) {
    e.target.style.backgroundColor = '#ffff00'
}

function soltar(e) {
    e.target.style.backgroundColor = '#ffffff'
}