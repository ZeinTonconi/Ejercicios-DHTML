function copiar(){
    let link=document.getElementById("enlace1").getAttribute('href');
    let enlace2=document.getElementById("enlace2");
    enlace2.setAttribute('href',link);
    
}