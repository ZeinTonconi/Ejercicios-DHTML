let form=document.getElementById("form");
let input=form.getElementsByTagName('input');
input[0].addEventListener('blur',perdioFoco);
function perdioFoco(event){
    if(event.target.value===''){
        alert('Esta vacio!!!!');
    }
}