let boton1=document.getElementById("boton1");
let boton2=document.getElementById("boton2");
boton1.addEventListener('click',cambiarColor);
boton2.addEventListener('click',cambiarColor);
function cambiarColor(event){
    let boton=event.target;
    if(boton.style.backgroundColor==='red')
        boton.style.backgroundColor='white';
    else
        boton.style.backgroundColor='red'; 
}