let html=document.getElementsByTagName('html');
html[0].addEventListener('click',(event)=>{
    let div=document.getElementById('div');
    div.style.top=event.pageY+'px';
    div.style.left=event.pageX+'px';
    console.log(event.clientX);
    console.log(event.clientY);
})