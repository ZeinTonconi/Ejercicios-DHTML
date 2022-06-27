let div=document.getElementById("divDbclick");
div.addEventListener('dblclick',(e)=>{
    if(e.target.style.width==='800px'){
        e.target.style.height='250px';
        e.target.style.width='250px';
    }
    else{
        e.target.style.height='70px';
        e.target.style.width='800px';
    }
});
