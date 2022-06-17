function mostrar(){
    let lista=document.getElementById("lista");
    console.log(lista.childNodes.length+" "+lista.hasChildNodes());
    if(!lista.hasChildNodes()){
        let li1=document.createElement('li');
        let text=document.createTextNode("Elemento 1");
        li1.appendChild(text);
        lista.appendChild(li1);

        let li2=document.createElement("li");
        let text2=document.createTextNode("Elemento 2");
        li2.appendChild(text2);
        lista.appendChild(li2);
    }
}