function cambiarRojo(){
    let parrafos=document.getElementsByTagName("p");
    for(let p of parrafos){
        p.style.color='#f00';
    }
}