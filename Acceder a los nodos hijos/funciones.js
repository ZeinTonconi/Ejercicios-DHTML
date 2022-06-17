function childrens(){
    console.log('children');
    let firstDiv=document.getElementById("firstDiv");
    let secondDiv=document.getElementById("secondDiv");
    alert(`Childrens\nEl primer parrafo tiene: ${firstDiv.children.length} hijos\nEl segundo parrafo tiene ${secondDiv.children.length}`);
}
function childNode(){
    console.log("childNode");
    let firstDiv=document.getElementById("firstDiv");
    let secondDiv=document.getElementById("secondDiv");
    alert(`ChildNodes\nEl primer parrafo tiene: ${firstDiv.childNodes.length} hijos\nEl segundo parrafo tiene ${secondDiv.childNodes.length}`);
}