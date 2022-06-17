let inputs=0;
function cambioInputs(){
    let div=document.getElementById("divInputs");
    let camInputs=parseInt(document.getElementById("numeroInputs").value);
    while(camInputs!=inputs){
        if(inputs>camInputs){
            inputs--;
            div.removeChild(div.lastElementChild);
            div.removeChild(div.lastElementChild); //remueve el br y el input
        }
        else{
            inputs++;
            div.appendChild(crearInput());
            div.appendChild(document.createElement('br'));
        }
    }
}
function crearInput(){
    let newInput=document.createElement('input');
    newInput.type='text';
    newInput.id=`text${inputs}`;
    return newInput;
}