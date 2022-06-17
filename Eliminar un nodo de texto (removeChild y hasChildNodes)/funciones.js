let x=0;
function anadir(){
    let par=document.getElementById("parrafo");
    x++;
    let text=document.createTextNode(`Texto #${x}`);
    par.appendChild(text);
}

function eliminar(){
    let par=document.getElementById("parrafo");
    if(par.hasChildNodes()){
        x--;
        par.removeChild(par.firstChild);
    }
}