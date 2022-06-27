let titulo=document.getElementsByTagName('h1');
titulo[0].addEventListener('mousemove',(event)=>{
    document.getElementById('coorX').innerText='Coordenada X: '+event.clientX;
    document.getElementById('coorY').innerHTML='Coordenada Y: '+event.clientY;
})