function coordenadas(event){
    let corx=document.getElementById("corX");
    let cory=document.getElementById("corY");
    corx.innerHTML="Coordenada X= "+event.clientX;
    cory.innerHTML="Coordenada Y= "+event.clientY;
}