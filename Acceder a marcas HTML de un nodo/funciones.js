function hideDiv2(){
    let div2=document.getElementById("div2");
    let padiv2=div2.getElementsByTagName('p');
    for(let p of padiv2){
        p.style.display='none';
    }
}