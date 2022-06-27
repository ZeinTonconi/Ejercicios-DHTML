document.getElementById('buscar').addEventListener('click',(event)=>{
    event.preventDefault();
    let text=document.getElementById('textarea');
    window.open(`https://www.google.com/search?q=${text.value}`);
})