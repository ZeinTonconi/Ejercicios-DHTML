document.getElementById("form").addEventListener('submit',(event)=>{
    let pass=document.getElementById("password");
    let conf=document.getElementById("repeticion");
    if(pass.value!==conf.value){
        alert('No son iguales!!!');
        event.preventDefault();
        return false;
    }
    else return true;
});