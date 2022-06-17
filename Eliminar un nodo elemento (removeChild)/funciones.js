function eliminar(){
    let id=document.getElementById("posicion").value;
    let div=document.getElementById("parrafos");
    div.removeChild(div.children[id]);
}