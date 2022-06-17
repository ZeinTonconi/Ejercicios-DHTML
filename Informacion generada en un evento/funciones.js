function ayuda(event){
    let divAyuda=document.getElementById("ayuda");
    divAyuda.style.display='block';
    divAyuda.style.left=`${event.clientX+10}px`;
    divAyuda.style.right=`${event.clientY+10}px`;
}