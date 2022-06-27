let texts=document.getElementsByTagName('input');
for(let text of texts){
    text.addEventListener('focus',(event)=>{
        event.target.style.color='red';
    })
}