let botones=document.getElementsByTagName('input');
for(let boton of botones){
    boton.addEventListener('click',(event)=>{
        event.stopPropagation();
        alert(`Se presiono el ${event.target.value}`);
    });
}
document.addEventListener('click',()=>{
    alert('Click del fondo');
});