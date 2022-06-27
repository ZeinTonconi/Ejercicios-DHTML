let seleccion=document.getElementById('seleccion');
seleccion.addEventListener('change',(event)=>{
    alert(`Se cambio a: ${event.target.value}`);
})