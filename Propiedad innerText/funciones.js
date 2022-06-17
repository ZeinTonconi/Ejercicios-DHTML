function agregarPunto(){
    let lista=document.getElementById("lista1");
    let firstItem=lista.firstElementChild;
    console.log(lista.firstElementChild);
    firstItem.innerText+='.';
}