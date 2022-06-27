let textarea=document.getElementById("textarea");
textarea.addEventListener('keydown', (event)=>{
    let tecla=event.key;
    alert(`Se presiono: ${tecla}`);
})