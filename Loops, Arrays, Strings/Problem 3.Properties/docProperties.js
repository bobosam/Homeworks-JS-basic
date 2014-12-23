
/*start from index.html*/

function displayProperties(){
    var propArr = [];
    for(var prop in document){
        propArr.push(prop);
    }
    propArr.sort();
    document.getElementById('result').innerHTML = propArr.join('<br/>');
}
displayProperties();