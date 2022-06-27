let botones=document.getElementsByTagName('input');
for(let boton of botones){
    boton.addEventListener('click',(event)=>{
        console.log(`${event.target.value}`);
        //alert(`Se presiono el ${event.target.value}`);
    },true);
}
document.addEventListener('click',()=>{
    console.log('Cambio de color');
    //alert('Cambio de Fondo')
    let body=document.getElementsByTagName('body');
    body[0].style.backgroundColor='yellow';
},true);