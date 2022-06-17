const dias=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
function mostrarDias(){
    let lista="<ol>"
    for(let dia of dias){
        lista+=`<li>${dia}</li>`
    }
    lista+='</ol>';
    console.log(lista);
    let divDias=document.getElementById("dias");
    divDias.innerHTML=lista;
}
