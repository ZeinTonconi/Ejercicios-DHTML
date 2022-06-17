function masBorde(){
    let tabla=document.getElementById("tabla1");
    if(tabla.hasAttribute("border")){
        tabla.setAttribute('border',parseInt(tabla.getAttribute('border'))+1);
    }
    else{
        tabla.setAttribute('border',1);
    }
}