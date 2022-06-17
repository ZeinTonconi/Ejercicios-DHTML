function mostrar(){
    let lista=document.getElementById("lista");
    for(let i=0;i<lista.children.length;i++){
        let child=lista.children[i];
        let text=document.createTextNode(`Respuesta ${i+1}`);
        child.appendChild(text);
    }
}